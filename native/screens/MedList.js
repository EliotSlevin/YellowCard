import React from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

	render() {
		const { navigation, router } = this.props;
		return (
			<SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
				<Text>Medication List</Text>
				<MaterialCommunityIcons
					name={'clipboard-text'}
					size={26}
				/>

			</SafeAreaView>
		)
	}
}
