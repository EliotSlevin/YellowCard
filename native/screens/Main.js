import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';


import Today from './Today'
import MedList from './MedList'
import { colors } from '../modules/shared'

const Main = TabNavigator(
  {
    Today: {
      screen: Today,
      path: "today"
    },
    MedList: {
      screen: MedList,
      path: "med-list"
    }
  },
  {
    initialRouteName: "MedList",
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeBackgroundColor: colors.YC_NAVBAR_BKG,
      style: {
        backgroundColor: colors.YC_NAVBAR_BKG,
      },
      inactiveBackgroundColor: colors.YC_NAVBAR_BKG,
      style: {
        backgroundColor: colors.YC_NAVBAR_BKG,
      },
      activeTintColor: colors.YC_YELLOW,
      inactiveTintColor: "#fff", // white
      showIcon: true
    }
  }
);


export default () => <Main />;

