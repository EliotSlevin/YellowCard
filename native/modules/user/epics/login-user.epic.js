import { Platform } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import { Observable } from 'rxjs/Observable';
import { NavigationActions } from 'react-navigation'

import types, { loginSuccess, loginFail } from '../actions'

export default LoginUserEpic = (action$, store) => {
  return action$.ofType(types.LOGIN_REQUEST)
    .switchMap((action) => {
      const { email, password } = action

      return firebase.auth().signInWithEmailAndPassword(email, password)
    })
    .mergeMap((user) => {
      if (Platform.OS === 'android') {
        const state = store.getState()
        const requestSettings = () => ({
          url: `${state.firebase.initDataUrl}db/users/${user.uid}`,
          method: 'GET',
          crossDomain: true,
          contentType: 'application/json; charset=utf-8',
          responseType: 'json',
        })

        return Observable.ajax(requestSettings())
          .catch(({ xhr }) => {
            throw xhr.response
          })
          .mergeMap(payload => {
            if (payload.status === 200) {
              const data = payload.response

              return Observable.of(data)
            } else throw payload
          })
      } else {
        return firebase.firestore().collection('users').doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) throw { error: `/users/${user.uid} does not exist` }

            return Observable.of({id: doc.id, ...doc.data() })
          })
      }
    })
    .mergeMap((user) => {
      const navToMainScreen = NavigationActions.navigate({
        routeName: 'Main',
        params: {},
      })

      return Observable.concat(
        Observable.of(loginSuccess(user, user.uid)),
        Observable.of(navToMainScreen)
      )
    })
    .catch((err) => {
      console.log('err', err.code, err.message)

      return Observable.concat(
        Observable.of(loginFail(err))
      )
    })
}