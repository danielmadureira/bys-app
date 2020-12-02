import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MessageBase } from '..';

import { styles } from "./styles";

const Comment = ({ diary }) => {
	return (
		<MessageBase
			diary={diary}
			header={
				<View style={styles.wrapper}>
					<View >
						<Image 
							style={styles.profile} 
							source={diary.profile} 
						/>
					</View>
					
					<View style={styles.wrapper_text}>
						<Text style={styles.name}>{diary.name}</Text>
						<Text style={styles.profession}>{diary.profession}</Text>
					</View>

					<View>
						<Text>:heart:</Text>
					</View>
				</View>
			}
		/>
	)
}

export default Comment;