import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from "./styles";

const ButtonBase = (props) => {
	return (
		<TouchableWithoutFeedback
			containerStyle={styles(props).size}
			style={styles(props).touchable}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={styles(props).text}>{props.title}</Text>
		</TouchableWithoutFeedback>
	)
}

export default ButtonBase;