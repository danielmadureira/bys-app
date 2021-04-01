import React, { useEffect } from 'react'
import {
	BackHandler,
	View
} from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { Icon } from 'react-native-elements'
import TextBase from '../TextBase';

const BackBase = ({ navigation, initial }) => {
	const route = useRoute()

	const screens = [
		'Calculator',
		'Diary',
		'Notification',
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
		<View
			onTouchEnd={() => {
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
		</View>
	);
};

export default BackBase;