import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

// redux
import { Provider, connect } from 'react-redux'
import configureStore from './configure-store'

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import { Main, Login } from './screens'
import { addNavigationHelpers } from 'react-navigation';



const AppNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      path: 'login',
    },
    Main: {
      screen: Main,
      path: 'main',
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    navigationOptions: { header: null },
  }
);

// nav state reducer
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const store = configureStore(navReducer)

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}
