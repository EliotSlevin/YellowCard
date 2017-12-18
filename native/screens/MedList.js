import React from 'react'
import {
	Platform,
	View,
	Text,
	SafeAreaView,
	StatusBar
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles'

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
			<SafeAreaView style={styles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
				<View style={styles.container}>
					<Text>Medication List</Text>
					<MaterialCommunityIcons
						name={'clipboard-text'}
						size={26}
					/>

				</View>
			</SafeAreaView>
		)
	}
}
