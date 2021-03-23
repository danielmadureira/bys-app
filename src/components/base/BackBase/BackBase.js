import React from 'react'
import {
	Text,
	View
} from 'react-native'

import { styles } from './styles'
import { Icon } from 'react-native-elements'
import TextBase from '../TextBase';

const BackBase = ({ navigation }) => {

	return (
		<View
			onTouchEnd={() => navigation.goBack()}
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