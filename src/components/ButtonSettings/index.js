import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TextBase from '../base/TextBase';

import { styles, colors } from './styles'

const ButtonSettings = (props) => {

	return (
		<TouchableWithoutFeedback
			style={styles(props).wrapper}
			onPress={props.onPress}
		>
			<TextBase style={styles(props).wrapper_text}>
				{props.children}
			</TextBase>
		</TouchableWithoutFeedback>
	);
};

export default ButtonSettings;