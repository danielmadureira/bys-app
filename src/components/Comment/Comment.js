import React from 'react'
import {
	Image,
	View,
	Text
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { MessageBase, TextBase } from '..'
import { actions } from '../../store/forum'
import DefaultProfile from '../../../assets/default-user.png'

import { styles } from "./styles";

const Comment = ({ diary }) => {
	const dispatch = useDispatch()

	const isLiked = () => {
		return (diary.user_reacted) ? '#BD2222' : '#c0c0c0'
	}

	const likeComment = () => {
		dispatch(actions.sendLike(diary.id))
	}

	return (
		<MessageBase
			comment={true}
			diary={diary}
			header={
				<View style={styles(diary).wrapper}>
					<View>
						<Image
							style={styles(diary).profile}
							source={
								diary.profile_picture ?
									{ uri: diary.profile_picture } :
									DefaultProfile
							}
						/>
					</View>

					<View style={styles(diary).wrapper_text}>
						<TextBase
							style={styles(diary).name}
							numberOfLines={1}
						>
							{diary.name}
						</TextBase>
						<TextBase
							style={styles(diary).profession}
							numberOfLines={1}
						>
							{diary.profession}
						</TextBase>
					</View>

					<View style={styles(diary).wrapper}>
						{diary.total_reactions > 0 && (
							<Text style={styles(diary).text_reactions}>
								{diary.total_reactions}
							</Text>
						)}
						<Icon
							name='favorite'
							color={isLiked()}
							onPress={() => likeComment()}
						/>
					</View>
				</View>
			}
		/>
	)
}

export default Comment;