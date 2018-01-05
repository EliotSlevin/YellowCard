import { Observable } from 'rxjs/Observable'
import '../../shared/rxjs-operators'

import types, { updateMedsSuccess, updateMedsFail } from '../actions'
import * as firebase from 'firebase'
import 'firebase/firestore'

const UpdateMedicationsEpic = (action$, store) => {
  return action$.ofType(types.UPDATE_MEDS_REQUEST)
    .switchMap((action) => {
      const state = store.getState()
      const { client } = state.shared.firebase
      if (client) {
        const db = firebase.firestore()
        // const db = firebase.firestore(client)
        console.log('db')
        return db.collection('medications').get()
      }
      console.log('no client')
      return Observable.concat(
        Observable.empty()
      )
    })
    .mergeMap((querySnapshot) => {
      console.log('querysnapshot', querySnapshot)
      const now = new Date()
      const medications = querySnapshot.reduce((accu, doc) => {
        const docData = { ...doc.data(), retrievetime: now }
        console.log('doc', doc.id, docData)
        accu[doc.id] = docData
      }, {})

      return Observable.concat(
        Observable.of(updateMedsSuccess(medications))
      )
    })
    .catch((err) => {
      console.log('medication epic err', JSON.stringify(err))
    })
}

export default UpdateMedicationsEpic