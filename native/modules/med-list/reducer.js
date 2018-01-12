import types from './actions'

const initialState = {
  isLoading: false,
  data: {},
  err: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEDS_REQUEST:
      return { ...state, isLoading: true }
    case types.UPDATE_MEDS_SUCCESS:
      state.data = { ...state.data, ...action.data }
      return { ...state, isLoading: false }
    case types.UPDATE_MEDS_FAIL:
      return { ...state, err: action.err, isLoading: false }
    default:
      return state
  }
}

export default reducer