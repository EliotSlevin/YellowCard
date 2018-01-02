import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

// redux
import { Provider } from 'react-redux'
import configureStore from './configure-store'

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import { Main, Login } from './screens'

const store = configureStore()

const Nav = StackNavigator(
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

export default () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}
