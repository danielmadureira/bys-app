import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TextBase from '../TextBase';

import { styles } from "./styles";

const ButtonBase = (props) => {
	return (
		<TouchableWithoutFeedback
			containerStyle={styles(props).size}
			style={styles(props).touchable}
			onPressOut={props.onPress}
			disabled={props.disabled}
		>
			{props.loader ? (<>
				<ActivityIndicator
					color="green"
					size="small"
				/>
			</>) : (
				<TextBase style={styles(props).text}>
					{props.title}
				</TextBase>
			)}
		</TouchableWithoutFeedback>
	)
}

export default ButtonBase;