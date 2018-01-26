import { Platform } from 'react-native'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { requestJson, extractFirebaseData } from '../../shared'

import types, { updateMedsSuccess, updateMedsFail } from '../actions'

const UpdateMedicationsEpic = (action$, store) => {
  return action$.ofType(types.UPDATE_MEDS_REQUEST)
    .switchMap((action) => {
      const { user, firebase } = store.getState()
      if (Platform.OS === 'android') {
        // firestore client needs update to work with android, see firebase-js-sdk/#283
        return Observable.fromPromise(user.identity.getIdToken())
          .switchMap((token) => {
            const requestSettings = requestJson(
              `https://firestore.googleapis.com/v1beta1/projects/yellow-card-85ae7/databases/(default)/documents/medications`,
              'GET', token, null
            )

            return Observable.ajax(requestSettings)
              .map(payload => {
                if (payload.status != 200) throw payload

                const medications = payload.response.documents.reduce((medications, s) => {
                  const schedule = extractFirebaseData(s)
                  medications[schedule.id] = schedule
                  return medications
                }, {})

                return medications
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