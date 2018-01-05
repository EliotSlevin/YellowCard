import * as types from './types'

export const updateMedsRequest = () => ({ type: types.UPDATE_MEDS_REQUEST })

export const updateMedsSuccess = (medications) => ({ 
  type: types.GET_MEDS_SUCCESS, 
  medications 
})

export const updateMedsFail = () => ({ type: types.GET_MEDS_FAIL, err })