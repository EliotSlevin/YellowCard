import React from 'react'
import { Platform, View, Text } from 'react-native';

import styles from '../styles'

const componentStyles = {
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    justifyContent: 'center',
    borderWidth: 0.5,
    padding: 5,
  }
}

export default class SchedulePanel extends React.Component {
  render() {
    const medicationId = this.props.medicationId
    console.log('medicationid', medicationId)
    const routines = this.props.routines
    const schedules = this.props.schedules
    console.log('schedules', schedules)

    return (
      <View style={[componentStyles.container]}>
        {routines.map((routine, i) => {
          const schedule = schedules.find((schedule) => schedule.routineId == routine.id && schedule.medicationId === medicationId)
          if (schedule) {
            return (
              <View key={i} style={componentStyles.box}>
                <Text style={styles.regular16}>{routine.name}</Text>
                <Text style={styles.bold25}>{schedule.amount}</Text>
              </View>
            )
          } else return (
            <View key={i} style={componentStyles.box}>
              <Text style={styles.regular16}>{routine.name}</Text>
              <Text style={styles.bold25}>0</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

