import React from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Today extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Today label',
		tabBarIcon: ({ tintColor, focused }) => (
			<MaterialIcons
				name={'list'}
				size={26}
				style={{ color: focused ? tintColor : 'white' }}
			/>
		),
	}

	render() {
		const { navigation, router } = this.props;
		return (
			<SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
				<Text>today</Text>
				<MaterialIcons
					name={'list'}
					size={26}
				/>

			</SafeAreaView>
		)
	}
}