import React from 'react'
import {
	Platform,
	View,
	Text,
	SafeAreaView,
	StatusBar
} from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../modules/shared/styles'

export default class Today extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Today',
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
			<SafeAreaView style={styles.safeArea} forceInset={{ horizontal: 'always', top: 'always' }}>
				<View style={styles.container}>
					<StatusBar />
					<Text>today</Text>
					<MaterialIcons
						name={'list'}
						size={26}
					/>
				</View>
			</SafeAreaView>
		)
	}
}