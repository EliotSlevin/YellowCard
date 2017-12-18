import React, { Component } from 'react';
import {
	StyleSheet, Platform, Dimensions,
} from 'react-native';

import { Constants } from 'expo';

const styles = StyleSheet.create({

  //common
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
})

export {styles as default}