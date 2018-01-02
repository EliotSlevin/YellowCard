import * as types from './action-types'

export const initFirebaseRequest = ({ email, password }) => {
  return { type: types.INIT_FIREBASE_REQUEST, email, password }
}

export const initFirebaseSuccess = (client) => {
  return { type: types.INIT_FIREBASE_SUCCESS, client }
}

export const initFirebaseFail = (err) => ({
  type: types.INIT_FIREBASE_FAIL, err
})