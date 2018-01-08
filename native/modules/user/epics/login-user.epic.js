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
      console.log('err', err.code, err.message)

      return Observable.concat(
        Observable.of(loginFail(err))
      )
    })
}