import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import { mergeWith, merge } from 'ramda'

import { Constants } from 'expo';
import styleOverrides from './styleOverrides'

/*
{ fontWeight: '100' }, // Thin
{ fontWeight: '200' }, // Ultra Light
{ fontWeight: '300' }, // Light
{ fontWeight: '400' }, // Regular
{ fontWeight: '500' }, // Medium
{ fontWeight: '600' }, // Semibold
{ fontWeight: '700' }, // Bold
{ fontWeight: '800' }, // Heavy
{ fontWeight: '900' }, // Black 
*/
const baseStyles = {
	// move to 'base' namespace if gets big
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // move to 'text' namespace if gets big
  regular17: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 17,
  },
  regular21: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 21,
  },
  medium40: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 40,
  },
  bold16: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 16,
  },
  bold25: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 25,
  },
}

const mergedStyles = mergeWith(merge, baseStyles, styleOverrides)

export { mergedStyles as default }
