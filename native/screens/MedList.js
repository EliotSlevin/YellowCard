import React from 'react'
import { Platform, View, Text, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux'


import styles from '../modules/shared/styles'
import { TitleBar, LabelledDescription, SchedulePanel } from '../modules/shared/components'
import { updateMedsRequest } from '../modules/med-list'

export class MedList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Medication List',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialCommunityIcons
        name={'clipboard-text'}
        size={26}
        style={{ color: focused ? tintColor : 'white' }}
      />
    ),
  }

  componentDidMount() {
    this.props.dispatch(updateMedsRequest())
  }

  render() {
    const { navigation, router, user, medications } = this.props;
    return (
      <SafeAreaView style={styles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
        <View style={styles.container}>
          <TitleBar title={`${user.data.name.first} ${user.data.name.last}`} subTitle={user.data.nhiNumber} />
          <ScrollView>
            {Object.keys(medications.data).map((k, i) => {
              const medication = medications.data[k]
              return (
                <View key={i}>
                  <LabelledDescription label='Generic Name:' description={medication.name} />
                  <LabelledDescription label='Brand Name:' description={medication.brandName} />
                  <LabelledDescription label="What's it for:" description={medication.purpose} />
                  <LabelledDescription label='Extra info:' description={medication.extraInfo} />
                  <SchedulePanel medicationId={k} schedules={user.data.schedules} routines={user.data.routines} />
                </View>
              )
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  medications: state.medications,
  user: state.user
})

export default connect(mapStateToProps)(MedList)
