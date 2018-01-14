import { Platform } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import { Observable } from 'rxjs/Observable';
import { NavigationActions } from 'react-navigation'

import types, { loginSuccess, loginFail } from '../actions'
import { identUpdate } from '../actions/auth';

export default LoginUserEpic = (action$, store) => {
  return action$.ofType(types.LOGIN_REQUEST)
    .switchMap((action) => {
      const { email, password } = action

      return firebase.auth().signInWithEmailAndPassword(email, password)
    })
    .mergeMap((user) => {
      if (Platform.OS === 'android') {
        const { firebase } = store.getState()
        return Observable.fromPromise(user.getIdToken())
          .switchMap((token) => {
            const requestSettings = () => ({
              url: `${firebase.apiBaseUrl}/db/users/${user.uid}`,
              method: 'GET',
              headers: { 'Authorization': `Bearer ${token}` },
              crossDomain: true,
              contentType: 'application/json; charset=utf-8',
              responseType: 'json',
            })

            return Observable.ajax(requestSettings())
              .map(payload => {
                if (payload.status === 200) {
                  const data = payload.response

                  return data
                } else throw payload
              })

          })
      } else {
        return firebase.firestore().collection('users').doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) throw { error: `/users/${user.uid} does not exist` }

            return { id: doc.id, ...doc.data() }
          })
      }
    })
    .mergeMap((user) => {
      const navToMainScreen = NavigationActions.navigate({
        routeName: 'Main',
        params: {},
      })

      return Observable.concat(
        Observable.of(loginSuccess(user)),
        Observable.of(navToMainScreen)
      )
    })
    .catch((err) => {
      console.log('login user epic err', err)

      return Observable.concat(
        Observable.of(loginFail(err))
      )
    })
}