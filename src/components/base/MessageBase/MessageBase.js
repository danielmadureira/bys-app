import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const MessageBase = (props) => {
	const { diary, header } = props;
	return (
		<TouchableWithoutFeedback>
			<View style={styles(props).wrapper_text}>
				{!header ? (
					<Text
						key={diary.id}
						style={styles(props).title}
					>
						{diary.title}
					</Text>
				) : (
						header
					)
				}

				<Text
					style={styles(props).subtitle}
				>
					{diary.texto}
				</Text>

				<View style={styles(props).wrapper_date}>
					<Text style={styles(props).date}>
						{diary.data}
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default MessageBase;