import React from 'react';
import { Text } from 'react-native';

const TextBase = (props) => {
	return (
		<Text style={{
			...props.style,
			fontFamily: 'Radley_400Regular'
		}}
			numberOfLines={props.numberOfLines}
			onPress={props.onPress}
		>
			{props.children}
		</Text>
	)
}

export default TextBase;
