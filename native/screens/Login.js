import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles'
import * as colors from '../modules/shared/colors'
import { initFirebaseRequest } from '../modules/shared'

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
    console.log('onloginaction', this.state)
    this.props.dispatch(initFirebaseRequest(this.state))
  }

  render() {
    const err = this.props.shared.firebase.err

    return (
      <SafeAreaView style={componentStyles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
        <View style={componentStyles.container}>
          {err && <Text>{err}</Text>}
          <TextInput placeholder='email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
          <TextInput placeholder='password' password={true} onChangeText={(text) => this.setState({ password: text })} />
          <Button title='Sign in' onPress={() => this.onLoginAction()}></Button>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', JSON.stringify(state))
  const { shared } = state
  return { shared }
}
export default connect(mapStateToProps)(Login)
