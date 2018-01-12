import * as types from './types'


export const initAuthRequest = () => ({
  type: types.INIT_AUTH_REQUEST,
})

export const identUpdate = (identity) => ({
  type: types.IDENT_UPDATE,
  identity
})

export const logoutRequest = () => ({
  type: types.LOGOUT
})