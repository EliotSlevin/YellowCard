import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from 'react-native';

import styles from '../styles'
import * as colors from '../shared/colors'

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
			password: ''
		}
	}

	setText(fieldId, text) {
		this.setState({ [fieldId]: text })
	}

	onLoginAction() {
		this.props.navigation.navigate('Main')					
	}

	render() {
		return (
			<SafeAreaView style={componentStyles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
				<View style={componentStyles.container}>
					<TextInput placeholder='email' onChangeText={(text) => this.setText('email', text)} />
					<TextInput placeholder='password' onChangeText={(text) => this.setText('password', text)} />
					<Button title='Sign in' onPress={() => this.onLoginAction()}></Button>
				</View>
			</SafeAreaView>
		)
	}
}

export default Login
