import { Observable } from 'rxjs/Observable';
import '../../shared/rxjs-operators'
import * as firebase from 'firebase';

import types, { initFirebaseRequest, initFirebaseSuccess, initFirebaseFail, initAuthRequest, loginRequest } from '../actions'


const InitFirebaseEpic = (action$, store) => {
  return action$.ofType(types.INIT_FIREBASE_REQUEST)
    .switchMap((action) => {
      const { email, password } = action
      const state = store.getState()
      const requestSettings = () => ({
        url: `${state.firebase.apiBaseUrl}/init`,
        method: 'POST',
        body: { email, password },
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        responseType: 'json',
      })

      return Observable.ajax(requestSettings())
        .catch(({ xhr }) => {
          return Observable.of(initFirebaseFail(xhr.response))
        })
        .mergeMap(payload => {
          if (payload.status === 200) {
            const data = payload.response
            const client = firebase.initializeApp({
              apiKey: data.API_KEY,
              authDomain: data.AUTH_DOMAIN,
              databaseURL: data.DATABASE_URL,
              projectId: data.PROJECT_ID,
              storageBucket: data.STORAGE_BUCKET_URL,
              messagingSenderId: data.MESSAGING_SENDER_ID
            })

            return Observable.concat(
              Observable.of(initFirebaseSuccess(client)),
              Observable.of(initAuthRequest()),
              Observable.of(loginRequest(email, password)),
            )
          } else throw payload
        })
        // use a timeout of 2 sec? then do the abort action? 
        .takeUntil(action$.ofType(types.INIT_FIREBASE_ABORT))
        .catch((err) => {
          console.log('err', err)
          return Observable.of(initFirebaseFail(err))
        })
    })
}


export default InitFirebaseEpic