import React from 'react';
import { Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { MessageBase, TextBase } from '..';

import { styles } from "./styles";

const Comment = ({ diary }) => {

	const isLiked = () => {
		return (diary.liked) ? '#BD2222' : '#c0c0c0'
	}
	
	return (
		<MessageBase
			comment={true}
			diary={diary}
			header={
				<View style={styles.wrapper}>
					<View>
						<Image 
							style={styles.profile} 
							source={
								diary.profile_picture ?
								{ uri: diary.profile_picture } :
								''
							} 
						/>
					</View>
					
					<View style={styles.wrapper_text}>
						<TextBase 
							style={styles.name} 
							numberOfLines={1}
						>
							{diary.name}
						</TextBase>
						<TextBase 
							style={styles.profession}
							numberOfLines={1}
						>
							{diary.profession}
						</TextBase>
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