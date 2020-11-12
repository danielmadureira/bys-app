import React from 'react';
import { Text, View } from 'react-native';

import { styles } from "./styles";

const TitleHeader = (props) => {
	return (
		<View>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<Text style={styles.subtitle}>
				{props.subtitle}
			</Text>
		</View>
	)
}

export default TitleHeader;