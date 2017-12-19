import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import { mergeWith, merge } from 'ramda'

import { Constants } from 'expo';
import styleOverrides from './styleOverrides'

const baseStyles = {
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
}

const intermediate = mergeWith(merge, baseStyles, styleOverrides)
console.log('intermediate', intermediate)
const styles = StyleSheet.create(intermediate)

export { styles as default }