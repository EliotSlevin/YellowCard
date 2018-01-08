import types from './actions'

const initialState = {
  isLoading: false,
  medications: {},
  err: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEDS_REQUEST:
      return { ...state, isLoading: true }
    case types.UPDATE_MEDS_SUCCESS:
      state.medications = { ...state.medications, ...action.medications }
      return { ...state, isLoading: false }
    case types.UPDATE_MEDS_FAIL:
      return { ...state, err: action.err, isLoading: false }
    default:
      return state
  }
}

export default reducer