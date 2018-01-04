import { AppNavigator } from './components'


export const navReducerCreator = (appRootNavigator) => {
  const initialState = appRootNavigator.router.getStateForAction(appRootNavigator.router.getActionForPathAndParams('Login'))

  const navReducer = (state = initialState, action) => {
    const nextState = appRootNavigator.router.getStateForAction(action, state)
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
  }

  return navReducer
}

const reducer = navReducerCreator(AppNavigator)

export default reducer