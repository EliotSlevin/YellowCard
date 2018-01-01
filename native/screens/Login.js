import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';

import styles from '../styles'
import * as colors from '../modules/shared/colors'

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
      err: null
    }
  }

  setText(fieldId, text) {
    this.setState({ [fieldId]: text })
  }

  onLoginAction() {
    const { email, password } = this.state
    const url = 'https://us-central1-yellow-card-85ae7.cloudfunctions.net/api/'
    fetch(url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        const initData = res
        this.props.navigation.navigate('Main')
      })
      .catch((err) => {
        this.setState({err: 'Invalid email or password'})
      })
  }

  render() {
    return (
      <SafeAreaView style={componentStyles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
        <View style={componentStyles.container}>
          {this.state.err && <Text>{this.state.err}</Text>}
          <TextInput placeholder='email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
          <TextInput placeholder='password' password={true} onChangeText={(text) => this.setState({ password: text })} />
          <Button title='Sign in' onPress={() => this.onLoginAction()}></Button>
        </View>
      </SafeAreaView>
    )
  }
}

export default Login
