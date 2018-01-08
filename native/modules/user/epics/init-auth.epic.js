import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase'
import 'firebase/auth'


import { authState$ } from '../subjects'
import types, { loginRequest } from '../actions'

export default InitAuthEpic = (action$, store) => {
  return action$.ofType(types.INIT_AUTH_REQUEST)
    .switchMap((action) => {
      console.log('initauthreq')
      firebase.auth().onAuthStateChanged((user) => {
        if (user) { // User is signed in.
          authState$.next(user)
          console.log('user signed in', JSON.stringify(user, null, 2))
        } else { // User is signed out.
          authState$.next(null)
        }
      })

      return Observable.empty()
    })
}