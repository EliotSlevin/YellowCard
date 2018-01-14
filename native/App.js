import React from 'react';
import { Platform } from 'react-native';

// redux
import { Provider, connect } from 'react-redux'
import configureStore from './configure-store'

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import { AppWithNavigationState } from './modules/nav'

const store = configureStore()

export default () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}
