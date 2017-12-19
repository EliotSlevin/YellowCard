import React from 'react'
import { Platform, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles'
import TitleBar from '../components/TitleBar'

export default class Today extends React.Component {
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
			schedules: [
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
			administration: [
				{
					medication_id: 0,
					user_id: 0,
					schedule_id: 1,
					amount: 1
				},
				{
					medication_id: 0,
					user_id: 0,
					schedule_id: 3,
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
					<View>
						<Text>Generic Name:</Text>
						<Text>{this.data.medications[0].name}</Text>
					</View>
					<View>
						<Text>Brand Name:</Text>
						<Text>{this.data.medications[0].brandName}</Text>
					</View>
					<View>
						<Text>What's it for:</Text>
						<Text>{this.data.medications[0].purpose}</Text>
					</View>
					<View>
						<Text>Extra info:</Text>
						<Text>{this.data.medications[0].extraInfo}</Text>
					</View>
					<View>
						{this.data.schedules.map((schedule, i) => {
							const ad = this.data.administration.find((ad) => ad.schedule_id == schedule.id)
							if (ad) {
								return (
									<View key={i}>
										<Text>{schedule.name}</Text>
										<Text>{ad.amount}</Text>
									</View>
								)
							} else return (
								<View key={i}>
									<Text>{schedule.name}</Text>
									<Text>0</Text>
								</View>
							)
						})}
					</View>
				</View>
			</SafeAreaView>
		)
	}
}
