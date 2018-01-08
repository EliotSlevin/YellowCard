import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from '../modules/shared/styles'
import * as colors from '../modules/shared/colors'
import { initFirebaseRequest } from '../modules/user'


const componentStyles = StyleSheet.create({
  safeArea: {
    ...styles.safeArea,
  },
  container: {
    ...styles.container,
    backgroundColor: colors.YC_YELLOW,
  }
})

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  setText(fieldId, text) {
    this.setState({ [fieldId]: text })
  }

  onLoginAction() {
    this.props.dispatch(initFirebaseRequest(this.state))
  }

  render() {
    const err = this.props.firebase.err

    // remove securetextentry={true} after update react native/eject
    return (
      <SafeAreaView style={componentStyles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
        <View style={componentStyles.container}>
          <FormValidationMessage>{err}</FormValidationMessage>
          <FormLabel>Email Address</FormLabel>
          <FormInput keyboardType='email-address' autoCapitalize='none' placeholder='Email Address' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} password={true} autoCapitalize='none' placeholder='Password' onChangeText={(text) => this.setState({ password: text })} />
          <Button title='Sign in' onPress={() => this.onLoginAction()}></Button>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  firebase: state.firebase
})

export default connect(mapStateToProps)(Login)
