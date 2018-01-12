import React from 'react';
import { Platform } from 'react-native';

// redux
import { Provider, connect } from 'react-redux'
import configureStore from './configure-store'

import { ScreenOrientation } from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import { AppWithNavigationState } from './modules/nav'
import { authState$, identUpdate, logoutRequest } from './modules/user'

const store = configureStore()

authState$.subscribe((next) => {
  if (!next) store.dispatch(logoutRequest())
  else {
    const user = next
    store.dispatch(identUpdate(user))
  }
})

export default () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}
