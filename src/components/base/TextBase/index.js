import React from 'react';
import { Text } from 'react-native';
import { 
	useFonts,
	Radley_400Regular
} from '@expo-google-fonts/radley';

const TextBase = (props) => {
	let [fontsLoaded] = useFonts({
		Radley_400Regular
	})

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