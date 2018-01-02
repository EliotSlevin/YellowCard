import { actionTypes as types } from './actions'
// reducer for all the actions in this module

const initialState = {
  firebase: { 
    initDataUrl: 'https://us-central1-yellow-card-85ae7.cloudfunctions.net/api/',
    client: null, 
    err: null, 
    isProcessing: false 
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_FIREBASE_REQUEST:
      state.firebase.isProcessing = true
      return { ...state }
    case types.INIT_FIREBASE_SUCCESS:
      state.firebase.isProcessing = false
      state.firebase.client = action.client
      return { ...state }
    case types.INIT_FIREBASE_FAIL:
      state.firebase.isProcessing = false
      state.firebase.err = 'Invalid email or password'
      return { ...state }
    default:
      return state
  }
}

export default reducer