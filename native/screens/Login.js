import React, { Component } from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, TextInput, View, SafeAreaView, Image, Dimensions, TouchableOpacity ,KeyboardAvoidingView} from 'react-native';

=======
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, Image, Dimensions } from 'react-native';
>>>>>>> fc1b91d... added the login logo and text
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

import styles from '../modules/shared/styles'
import * as colors from '../modules/shared/colors'
import { initFirebaseRequest } from '../modules/user'

<<<<<<< HEAD
const width = Dimensions.get("window").width;

=======
const imageWidth = Dimensions.get("window").width / 2;
>>>>>>> fc1b91d... added the login logo and text

const componentStyles = StyleSheet.create({
  safeArea: {
    ...styles.safeArea
  },
  container: {
    ...styles.container,
<<<<<<< HEAD
    backgroundColor: colors.YC_LOGIN_YELLOW,
    alignItems: "center"
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 4,
    height: width / 4

=======
    backgroundColor: colors.YC_YELLOW,
    alignItems: "center"
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: imageWidth,
    height: imageWidth
>>>>>>> fc1b91d... added the login logo and text
  },
  logoText: {
    color: "#000",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: "600"
<<<<<<< HEAD
  },
  form: {
    width: width / 1.25,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFF",
    color: "#000",
    fontSize: 0.04 * width,
    paddingLeft: 20,
    marginVertical: 10
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    width: width / 1.25,
    marginVertical: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "300",
    paddingVertical: 10
=======
>>>>>>> fc1b91d... added the login logo and text
  }
});

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      title: ''
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
    return <SafeAreaView style={componentStyles.safeArea} forceInset={{ horizontal: "always", top: "always" }}>
        <View style={componentStyles.container}>
          <Image resizeMode="contain" style={componentStyles.logo} source={require("./images/login.png")} />
          <Text style={componentStyles.logoText}>Yellow Card</Text>
<<<<<<< HEAD
          <KeyboardAvoidingView behavior="padding">
            <FormValidationMessage>{err}</FormValidationMessage>
            <FormInput inputStyle={componentStyles.form} underlineColorAndroid="transparent" keyboardType="email-address" autoCapitalize="none" placeholder="Email Address" value={this.state.email} onChangeText={text => this.setState(
                  { email: text }
                )} />
            <FormInput inputStyle={componentStyles.form} underlineColorAndroid="transparent" secureTextEntry={true} password={true} autoCapitalize="none" placeholder="Password" onChangeText={text => this.setState(
                  { password: text }
                )} />

            <TouchableOpacity style={componentStyles.buttonContainer} onPress={() => this.onLoginAction()}>
              <View style={componentStyles.button}>
                <Text style={componentStyles.buttonText}>Login!</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>;
  } 
=======
          <FormValidationMessage>{err}</FormValidationMessage>
          <FormLabel>Email Address</FormLabel>
          <FormInput keyboardType="email-address" autoCapitalize="none" placeholder="Email Address" value={this.state.email} onChangeText={text => this.setState(
                { email: text }
              )} />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} password={true} autoCapitalize="none" placeholder="Password" onChangeText={text => this.setState(
                { password: text }
              )} />
          <Button title="Sign in" onPress={() => this.onLoginAction()} />
        </View>
      </SafeAreaView>;
  }
>>>>>>> fc1b91d... added the login logo and text
}

const mapStateToProps = (state) => ({
  firebase: state.firebase
})

export default connect(mapStateToProps)(Login)
