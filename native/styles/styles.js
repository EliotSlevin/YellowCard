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
  get label() {
    return {
      textAlign: 'left',
      ...this.bold16
    }
  },
  get description() {
    return {
      textAlign: 'left',
      ...this.regular21
    }
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
const styles = StyleSheet.create(mergedStyles)




export { styles as default }
