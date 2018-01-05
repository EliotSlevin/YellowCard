import { Observable } from 'rxjs/Observable'
import '../../shared/rxjs-operators'
import * as firebase from 'firebase'
import 'firebase/firestore'

import types, { updateMedsSuccess, updateMedsFail } from '../actions'

const UpdateMedicationsEpic = (action$, store) => {
  return action$.ofType(types.UPDATE_MEDS_REQUEST)
    .switchMap((action) => {
      const state = store.getState()
      const { client } = state.shared.firebase
      if (client) {
        const db = firebase.firestore()
        return Observable.fromPromise(db.collection('medications').get())
      }

      return Observable.concat(
        Observable.empty()
      )
    })
    .mergeMap((querySnapshot) => {
      const now = new Date()
      const medications = {}
      querySnapshot.forEach((doc) => {
        const docData = { ...doc.data(), retrievetime: now }
        medications[doc.id] = docData
      })

      return Observable.concat(
        Observable.of(updateMedsSuccess(medications))
      )
    })
    .catch((err) => {
      console.log('medication epic err', JSON.stringify(err))
    })
}

export default UpdateMedicationsEpic