import * as types from './types'

export const loginRequest = (email, password) => ({
  type: types.LOGIN_REQUEST,
  email, password
})

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  user
})

export const loginFail = (err) => ({
  type: types.LOGIN_FAIL,
  err
})