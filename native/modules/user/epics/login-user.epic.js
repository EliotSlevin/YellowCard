import { Platform } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import { Observable } from 'rxjs/Observable';
import { NavigationActions } from 'react-navigation'

import types, { loginSuccess, loginFail } from '../actions'
import { identUpdate } from '../actions/auth';
import { requestJson, extractFirebaseData } from '../../shared'


export default LoginUserEpic = (action$, store) => {
  return action$.ofType(types.LOGIN_REQUEST)
    .switchMap((action) => {
      const { email, password } = action

      return firebase.auth().signInWithEmailAndPassword(email, password)
    })
    .mergeMap((user) => {
      if (Platform.OS === 'android') {
        const { firebase } = store.getState()
        return user.getIdToken()
          .then((token) => {
            const actions = [
              fetch(`https://firestore.googleapis.com/v1beta1/projects/yellow-card-85ae7/databases/(default)/documents/users/${user.uid}`,
                {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
              ),
              fetch(`https://firestore.googleapis.com/v1beta1/projects/yellow-card-85ae7/databases/(default)/documents/users/${user.uid}/routines`,
                {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
              ),
              fetch(`https://firestore.googleapis.com/v1beta1/projects/yellow-card-85ae7/databases/(default)/documents/users/${user.uid}/schedules`,
                {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
              ),
            ]

            return Promise.all(actions)
          })
          .then((responses) => {
            return Promise.all(responses.map((res) => res.json()))
          })
          .then((responses) => {
            const routines = responses[1].documents.reduce((routines, r) => {
              const routine = extractFirebaseData(r)
              routines.push(routine)
              return routines
            }, [])

            const schedules = responses[2].documents.reduce((schedules, s) => {
              const schedule = extractFirebaseData(s)
              schedules.push(schedule)
              return schedules
            }, [])

            return { ...extractFirebaseData(responses[0]), routines, schedules }
          })
      } else {
        const userDoc = firebase.firestore().collection('users').doc(user.uid)
        const actions = [
          userDoc.get(),
          userDoc.collection('routines').get(),
          userDoc.collection('schedules').get()
        ]
        return Promise.all(actions)
          .then((responses) => {

            const routines = []
            responses[1].forEach((doc) => {
              routines.push({ id: doc.id, ...doc.data() })
            })
            const schedules = []
            responses[2].forEach((doc) => {
              schedules.push({ id: doc.id, ...doc.data() })
            })

            return { id: responses[0].id, ...responses[0].data(), routines, schedules }
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