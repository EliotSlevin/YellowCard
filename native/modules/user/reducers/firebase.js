import types from '../actions'

const initialState = {
  apiBaseUrl: 'https://us-central1-yellow-card-85ae7.cloudfunctions.net/api',
  client: null,
  err: null,
  isProcessing: false
}

export default firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_FIREBASE_REQUEST:
      state.isProcessing = true
      return { ...state }
    case types.INIT_FIREBASE_SUCCESS:
      state.isProcessing = false
      state.client = action.client
      return { ...state }
    case types.INIT_FIREBASE_FAIL:
      state.isProcessing = false
      state.err = 'Invalid email or password'
      return { ...state }
    case types.INIT_AUTH_REQUEST:
      return { ...state }
    default: return state
  }
}

