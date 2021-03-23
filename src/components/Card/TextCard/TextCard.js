import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { FowardBase, TextBase } from '../..';

import { styles } from "./styles";

const TextCard = (props) => {
	const { diary, event, icon } = props;
	return (
		<TouchableWithoutFeedback
			onPress={event}
		>
			<View style={styles(props).wrapper_text}>
				<View style={styles(props).header}>
					<TextBase
						numberOfLines={2}
						key={diary.id}
						style={styles(props).title}
					>
						{diary.name}
					</TextBase>
					
					<View>
						{(icon) && <FowardBase />}
					</View>
				</View>

				<TextBase
					numberOfLines={4}
					style={styles(props).subtitle}
				>
					{diary.description}
				</TextBase>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default TextCard;