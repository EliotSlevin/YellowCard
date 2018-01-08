import types from '../actions'

const initialState = {
  email: null,
  photoURL: null,
  uid: null,
  providerData: null,
  name: { first: null, last: null },
  nhi: null,
  routines: [],
  schedules: [],
  isLoading: false
}

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      state.isLoading = true
      return { ...state }
    case types.LOGIN_SUCCESS:
      state.isLoading = false
      return { ...state }
    case types.LOGIN_FAIL:
      state.isLoading = false
      return { ...state, err: action.err }
    default: return state
  }
}
