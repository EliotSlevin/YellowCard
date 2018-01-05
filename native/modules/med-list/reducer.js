import types from './actions'

const initialState = {
  medications: {} // { each medication has a unique identifier to avoid collision globally }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEDS_REQUEST:
      return { ...state, isLoading: true }
    case types.UPDATE_MEDS_SUCCESS:
      state.medications = { ...state.medications, ...medications }
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default reducer