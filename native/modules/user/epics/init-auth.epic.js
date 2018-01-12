import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase'
import 'firebase/auth'


import { authState$ } from '../subjects'
import types, { loginRequest, identUpdate, logoutRequest } from '../actions'

export default InitAuthEpic = (action$, store) => {
  return action$.ofType(types.INIT_AUTH_REQUEST)
    .mergeMap((action) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) { // User is signed in.
          authState$.next(user)
        } else { // User is signed out.
          authState$.next(null)
        }
      })

      return Observable.empty()
    })
}