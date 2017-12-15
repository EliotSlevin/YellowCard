import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import Today from './screens/Today'
import MedList from './screens/MedList'

const App = TabNavigator(
  {
    Today: {
      screen: Today,
      path: '',
    },
    MedList: {
      screen: MedList,
      path: 'med-list'
    }
  },
  {
    initialRouteName: 'Today',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#fffd86' : '#fff',
    },
  }
);


export default () => <App />;