import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextBase } from '..';

import { styles } from "./styles";

const ButtonBase = (props) => {
	return (
		<TouchableWithoutFeedback
			containerStyle={styles(props).size}
			style={styles(props).touchable}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<TextBase style={styles(props).text}>
				{props.title}
			</TextBase>
		</TouchableWithoutFeedback>
	)
}

export default ButtonBase;