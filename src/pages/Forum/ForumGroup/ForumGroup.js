import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {
	BackBase,
	Comment,
	LoaderBase,
	TextBase,
	TitleHeader
} from '../../../components'

import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../store/forum'

const ForumGroup = ({ navigation, route }) => {
	const { title, subtitle, id } = route.params
	const {
		comments,
		isCommentLoading
	} = useSelector(state => state.forum)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isCommentLoading) {
			dispatch(actions.getAllForumComments(id))
		}
	}, [isCommentLoading])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Sala de conversa"
					subtitle="Deixe um depoimento"
				/>

				<BackBase navigation={navigation} />
			</View>

			<View style={styles.wrapper_status}>
				<View style={styles.status}>
					<TextBase style={styles.status_title}>
						{title}
					</TextBase>
					<TextBase
						style={styles.status_subtitle}
						numberOfLines={4}
					>
						{subtitle}
					</TextBase>
				</View>
			</View>

			<View style={styles.btn_wrapper}>
				<View style={styles.btn_content}>
					<TextBase
						styles={styles.btn_text}
						onPress={() => {
							navigation.navigate('WriteForumComment', {
								id: id
							})
						}}
					>
						Escrever mensagem
					</TextBase>
				</View>
			</View>


			{!isCommentLoading ? (
				<View style={styles.wrapper_comment}>
					{comments.map((comment) => {
						return (
							<Comment
								key={comment.id}
								diary={comment}
							/>
						)
					})}
				</View>
			) : (
				<View style={{ width: '100%' }}>
					<LoaderBase />
				</View>
			)}
		</ScrollView>
	);
};

export default ForumGroup;