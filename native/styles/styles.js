import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import { mergeWith, merge } from 'ramda'

import { Constants } from 'expo';
import styleOverrides from './styleOverrides'

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
  bold25: {
    fontFamily: 'SFUIText-Bold',
    fontSize: 16,
  },
}

const staticStyles = mergeWith(merge, baseStyles, styleOverrides)
const dynamicStyles = [
	(staticStyles) => {
		return {
			...staticStyles,
			label: {
				textAlign: 'left',
				...staticStyles.bold16
			}
		}
	},
	(staticStyles) => {
		return {
			...staticStyles,
			description: {
				textAlign: 'left',
				...staticStyles.regular21
			}
		}
	},
]

const mergedStyles = dynamicStyles.reduce((accu, cur, i) => cur(accu), staticStyles)
export { mergedStyles as default }
