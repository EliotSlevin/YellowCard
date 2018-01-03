import React from 'react'
import { Platform, View, Text, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../modules/shared/styles'
import { TitleBar, LabelledDescription, SchedulePanel } from '../modules/shared/components'

export class MedList extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Medication List label',
		tabBarIcon: ({ tintColor, focused }) => (
			<MaterialCommunityIcons
				name={'clipboard-text'}
				size={26}
				style={{ color: focused ? tintColor : 'white' }}
			/>
		),
	}

	get data() {
		return {
			users: [
				{
					id: 0,
					name: "Eliot Slevin",
					role: 'member',
					nhiNumber: 'ABC1234'
				}
			],
			medications: [
				{
					id: 0,
					name: 'Aspirin 100mg tablet',
					brandName: 'Ethics Enteric Coated Aspirin',
					purpose: 'Helps prevent stokes and heart attack',
					extraInfo: 'Swallow whole, take with food'
				}
			],
			routines: [
				{
					id: 0,
					user_id: 0,
					name: 'Wake',
					time: '8:00am'
				},
				{
					id: 1,
					user_id: 0,
					name: 'Break',
					time: '10:00am'
				},
				{
					id: 2,
					user_id: 0,
					name: 'Lunch',
					time: '12:30pm'
				},
				{
					id: 3,
					user_id: 0,
					name: 'Dinner',
					time: '6:30pm'
				},
				{
					id: 4,
					user_id: 0,
					name: 'Sleep',
					time: '10:00pm'
				},
			],
			schedules: [
				{
					medication_id: 0,
					user_id: 0,
					routine_id: 1,
					amount: 1
				},
				{
					medication_id: 0,
					user_id: 0,
					routine_id: 3,
					amount: 1
				},
			]
		}
	}

	render() {
		const { navigation, router } = this.props;
		return (
			<SafeAreaView style={styles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
				<View style={styles.container}>
					<TitleBar title='Eliot Slevin' subTitle='ABC1234' />
					<ScrollView>
						<LabelledDescription label='Generic Name:' description={this.data.medications[0].name} />
						<LabelledDescription label='Brand Name:' description={this.data.medications[0].brandName} />
						<LabelledDescription label="What's it for:" description={this.data.medications[0].purpose} />
						<LabelledDescription label='Extra info:' description={this.data.medications[0].extraInfo} />
						<SchedulePanel schedules={this.data.schedules} routines={this.data.routines} />
					</ScrollView>
				</View>
			</SafeAreaView>
		)
	}
}

export default MedList 
