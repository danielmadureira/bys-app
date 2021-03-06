import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { MessageBase } from '..';

import { styles } from "./styles";

const Comment = ({ diary }) => {

	const isLiked = () => {
		let color = (diary.liked) ? '#BD2222' : '#c0c0c0'

		return color
	}

	return (
		<MessageBase
			diary={diary}
			header={
				<View style={styles.wrapper}>
					<View>
						<Image 
							style={styles.profile} 
							source={diary.profile} 
						/>
					</View>
					
					<View style={styles.wrapper_text}>
						<Text 
							style={styles.name} 
							numberOfLines={1}
						>
							{diary.name}
						</Text>
						<Text 
							style={styles.profession}
							numberOfLines={1}
						>
							{diary.profession}
						</Text>
					</View>

					<View>
						<Icon 
							name='favorite'
							color={isLiked()}
						/>
					</View>
				</View>
			}
		/>
	)
}

export default Comment;