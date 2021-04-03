import React, { useEffect } from 'react'
import {
	BackHandler,
	View
} from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { Icon } from 'react-native-elements'
import TextBase from '../TextBase';
import { TouchableOpacity } from 'react-native-gesture-handler'

const BackBase = ({ navigation, initial }) => {
	const route = useRoute()

	const screens = [
		'Calculator',
		'Notification',
		'Diary',
		'Forum',
		'Profile'
	]

	const _isSelectionModeEnabled = () => {
		return screens.includes(route.name) ? true : false
	}

	const _disableSelectionMode = () => {
		navigation.navigate('Feed')
	}

	const handleScreen = () => {
		useFocusEffect(
			React.useCallback(() => {
				const onBackPress = () => {
					if (_isSelectionModeEnabled()) {
						_disableSelectionMode();
						return true;
					} else {
						return false;
					}
				};

				BackHandler.addEventListener('hardwareBackPress', onBackPress);

				return () =>
					BackHandler.removeEventListener('hardwareBackPress', onBackPress);
			}, [_isSelectionModeEnabled, _disableSelectionMode])
		);
	}

	handleScreen()

	return (
		<TouchableOpacity
			onPress={() => {
				if (initial) {
					navigation.navigate('Feed')
				} else {
					navigation.goBack()
				}
			}}
			style={styles.header_icon}
		>
			<Icon
				name="keyboard-backspace"
				size={30}
			/>
			<TextBase style={styles.header_back}>Voltar</TextBase>
		</TouchableOpacity>
	);
};

export default BackBase;