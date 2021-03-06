import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { FowardBase } from '../..';

import { styles } from "./styles";

const TextCard = (props) => {
	const { diary, event, icon } = props;
	return (
		<TouchableWithoutFeedback
			onPress={event}
		>
			<View style={styles(props).wrapper_text}>
				<View style={styles(props).header}>
					<Text
						numberOfLines={2}
						key={diary.id}
						style={styles(props).title}
					>
						{diary.title}
					</Text>
					
					<View>
						{(icon) && <FowardBase />}
					</View>
				</View>
				

				<Text
					numberOfLines={4}
					style={styles(props).subtitle}
				>
					{diary.texto}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default TextCard;