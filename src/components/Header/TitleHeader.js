import React from 'react';
import { View } from 'react-native';
import TextBase from '../base/TextBase';

import { styles } from "./styles";

const TitleHeader = (props) => {
	return (
		<View>
			<TextBase style={styles(props).title}>
				{props.title}
			</TextBase>
			<TextBase style={styles(props).subtitle}>
				{props.subtitle}
			</TextBase>
		</View>
	)
}

export default TitleHeader;