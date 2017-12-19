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
  // move to textStyles if gets big
  regular17: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
  },
  regular21: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 21,
  },
  medium40: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 40,
  },
  bold16: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 16,
  },
}

const intermediate = mergeWith(merge, baseStyles, styleOverrides)
console.log('intermediate', intermediate)
const styles = StyleSheet.create(intermediate)

export { styles as default }