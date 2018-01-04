import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Main, Login } from '../../../screens'

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

export default AppNavigator