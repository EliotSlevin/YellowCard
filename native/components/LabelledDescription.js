import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from '../styles'

const componentStyles = StyleSheet.create({
	container: {
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 15,
	},
	label: {
		textAlign: 'left',
		...styles.bold16
	},
	description: {
		textAlign: 'left',
		...styles.regular21
	},
})

export default class LabelledDescription extends React.Component {
  render() {
    return (
      <View style={componentStyles.container}>
        <Text style={[componentStyles.label]}>{this.props.label}</Text>
				<Text style={[componentStyles.description]}>{this.props.description}</Text>
      </View>
    )
  }
}
