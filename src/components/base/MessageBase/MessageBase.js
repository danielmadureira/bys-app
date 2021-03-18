import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const MessageBase = (props) => {
	const { diary, header, onPress } = props;
	return (
		<TouchableWithoutFeedback
			onPress={onPress}
		>
			<View style={styles(props).wrapper}>
				<View style={styles(props).wrapper_text}>
					{!header ? (
						<Text
							numberOfLines={2}
							key={diary.id}
							style={styles(props).title}
						>
							{diary.title}
						</Text>
					) : 
					(header)}

					<Text
						style={styles(props).subtitle}
						numberOfLines={2}
					>
						{diary.text}
					</Text>

					<View style={styles(props).wrapper_date}>
						<Text style={styles(props).date}>
							{new Date(diary.created_at).toLocaleDateString("pt-BR", {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default MessageBase;