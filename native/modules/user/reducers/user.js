import types from '../actions'

const initialState = {
  identity: null,
  data: null
}

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      state.isLoading = true
      return { ...state }
    case types.IDENT_UPDATE:
      state.isLoading = false;
      return {...state, identity: action.identity} 
    case types.LOGIN_SUCCESS:
      state.isLoading = false
      return { ...state, data: action.user }
    case types.LOGIN_FAIL:
      state.isLoading = false
      return { ...state, err: action.err }
    default: return state
  }
}
