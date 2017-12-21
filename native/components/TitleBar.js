import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from '../styles'
import * as colors from '../shared/colors'

const componentStyle = StyleSheet.create({
	container: { 
		padding: 7.5, 
		paddingTop: 15, 
		paddingLeft: 15, 
		marginBottom: 20, 
		height: '22%', 
		backgroundColor: colors.YC_YELLOW 
	},
  title: { fontSize: 40, fontWeight: '400' },
	subTitle: {  }
})

export default class TitleBar extends React.Component {
  render() {
    const title = this.props.title
    const subTitle = this.props.subTitle

    return (
      <View style={[componentStyle.container]}>
        <Text style={[componentStyle.title, styles.medium40]}>{title}</Text>
        <Text style={[componentStyle.subTitle, styles.regular17]}>{subTitle}</Text>
      </View>
    )
  }
}
