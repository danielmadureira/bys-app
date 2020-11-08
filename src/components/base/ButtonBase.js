import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { styles } from "./styles";

const ButtonBase = (props) => {
	return (
		<TouchableHighlight
			style={styles.button}
		>
			<Button
				color={styles.colorButton.color}
				title={props.title}
				onPress={props.onPress}
			/>
		</TouchableHighlight>
	)
}

export default ButtonBase;