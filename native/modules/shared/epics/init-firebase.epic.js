import { Observable } from 'rxjs/Observable';
import '../../shared/rxjs-operators'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation'

import { initFirebaseRequest, initFirebaseSuccess, initFirebaseFail, actionTypes as types } from '../actions'


const InitFirebaseEpic = (action$, store) => {
  return action$.ofType(types.INIT_FIREBASE_REQUEST)
    .switchMap((action) => {
      const state = store.getState()
      const requestSettings = () => ({
        url: state.shared.firebase.initDataUrl,
        method: 'POST',
        body: { email: action.email, password: action.password },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        responseType: 'json',
      })

      return Observable.ajax(requestSettings())
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

            const navToMainScreen = NavigationActions.navigate({
              routeName: 'Main',
              params: {},
            })

            return Observable.concat(
              Observable.of(initFirebaseSuccess(client)),
              Observable.of(navToMainScreen)
            )
          } else throw payload
        })
        // use a timeout of 2 sec? then do the abort action? 
        .takeUntil(action$.ofType(types.INIT_FIREBASE_ABORT))
        .catch(({ xhr }) => Observable.of(initFirebaseFail(xhr.response)))
    })
}


export default InitFirebaseEpic