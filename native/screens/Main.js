import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';


import Today from './Today'
import MedList from './MedList'

const Main = TabNavigator(
  {
    Today: {
      screen: Today,
      path: 'today',
    },
    MedList: {
      screen: MedList,
      path: 'med-list'
    }
  },
  {
    initialRouteName: 'MedList',
		tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#fffd86' : '#fff',
    },
  }
);


export default () => <Main />;

