import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import { Main, Login } from './screens'

const App = StackNavigator(
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
		navigationOptions:{ header: null},
  }
);


export default () => <App />;
