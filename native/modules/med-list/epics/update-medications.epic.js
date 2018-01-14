import { Platform } from 'react-native'
import { Observable } from 'rxjs/Observable'
// import '../../shared/rxjs-operators'
import * as firebase from 'firebase'
import 'firebase/firestore'

import types, { updateMedsSuccess, updateMedsFail } from '../actions'

const UpdateMedicationsEpic = (action$, store) => {
  return action$.ofType(types.UPDATE_MEDS_REQUEST)
    .switchMap((action) => {
      const { user, firebase } = store.getState()
      if (Platform.OS === 'android') {
        // firestore client needs update to work with android, see firebase-js-sdk/#283
        return Observable.fromPromise(user.identity.getIdToken())
          .switchMap((token) => {
            const requestSettings = () => ({
              url: `${firebase.apiBaseUrl}/db/medications`,
              method: 'GET',
              headers: { 'Authorization': `Bearer ${token}` },
              crossDomain: true,
              contentType: 'application/json; charset=utf-8',
              responseType: 'json',
            })

            return Observable.ajax(requestSettings())
              .map(payload => {
                if (payload.status === 200) {
                  const medications = payload.response
                  return medications
                } else throw payload
              })
          })
      } else {
        const db = firebase.firestore()
        return db.collection('medications').get()
          .then((querySnapshot) => {
            const now = new Date()
            const medications = {}
            querySnapshot.forEach((doc) => {
              const docData = { ...doc.data(), retrievetime: now }
              medications[doc.id] = docData
            })

            return medications
          })
      }
    })
    .mergeMap((medications) => {
      return Observable.concat(
        Observable.of(updateMedsSuccess(medications))
      )
    })
    .catch((err) => {
      console.log(err)
      return Observable.concat(
        Observable.of(updateMedsFail(err))
      )
    })
}

export default UpdateMedicationsEpic