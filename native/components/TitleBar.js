import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from '../styles'

const titleBarStyle = StyleSheet.create({
  container: { padding: 7.5, height: '22%', backgroundColor: '#fffd86' },
  title: { marginTop: 7.5, fontSize: 40, fontWeight: '400' },
  subTitle: {marginTop: 7.5}
})

export default class TitleBar extends React.Component {
  render() {
    const title = this.props.title
    const subTitle = this.props.subTitle

    return (
      <View style={[titleBarStyle.container]}>
        <Text style={[titleBarStyle.title, styles.medium40]}>{title}</Text>
        <Text style={[titleBarStyle.subTitle, styles.regular17]}>{subTitle}</Text>
      </View>
    )
  }
}