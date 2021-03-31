import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import TextBase from '../TextBase';

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
						<TextBase
							numberOfLines={2}
							key={diary.id}
							style={styles(props).title}
						>
							{diary.title}
						</TextBase>
					) :
						(header)}

					<TextBase
						style={styles(props).subtitle}
					>
						{diary.text}
					</TextBase>

					<View style={styles(props).wrapper_date}>
						{diary.created_at && (
							<TextBase style={styles(props).date}>
								{new Date(diary.created_at).toLocaleDateString("pt-BR", {
									day: 'numeric',
									month: 'long',
									year: 'numeric'
								})}
							</TextBase>
						)}
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default MessageBase;