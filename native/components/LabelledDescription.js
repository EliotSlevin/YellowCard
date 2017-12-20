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
	},
	descriptionContainer: {
		marginTop: -5,
		flexDirection: 'row',
	},
	description: {
	},
})

export default class LabelledDescription extends React.Component {
  render() {
    return (
      <View style={componentStyles.container}>
        <Text style={[componentStyles.label, styles.label]}>{this.props.label}</Text>
					<Text style={[componentStyles.description, styles.description]}>{this.props.description}</Text>
      </View>
    )
  }
}
