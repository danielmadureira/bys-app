import React, { useState } from 'react'
import {
	Image,
	View,
	Text
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import TextBase from '../base/TextBase'
import MessageBase from '../base/MessageBase/MessageBase'
import { actions } from '../../store/forum'
import DefaultProfile from '../../../assets/default-user.png'

import { styles } from "./styles";

const Comment = ({ diary }) => {
	const [like, setLike] = useState(diary.user_reacted)
	const dispatch = useDispatch()

	const isLiked = () => {
		return (like) ? '#BD2222' : '#c0c0c0'
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
							{diary.name || 'Usuário indisponível'}
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
							<Text style={styles({ liked: like }).text_reactions}>
								{diary.total_reactions}
							</Text>
						)}
						<Icon
							name='favorite'
							color={isLiked()}
							onPress={() => {
								setLike(like === 0 ? 1 : 0)
								likeComment()
							}}
						/>
					</View>
				</View>
			}
		/>
	)
}

export default Comment;