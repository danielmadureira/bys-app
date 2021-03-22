import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	Text,
	View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackBase, Comment, TitleHeader } from '../../../components'

import { styles } from './styles'
import ProfileImage from '../../../../assets/Profile-picture.png'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../store/forum'
import { ActivityIndicator } from 'react-native'

const ForumGroup = ({ navigation, route }) => {
  const { title, subtitle, id } = route.params
	const { 
		comments, 
		isCommentLoading 
	} = useSelector(state => state.forum)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if(isCommentLoading) {
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
					<Text style={styles.status_title}>
						{title}
					</Text>
					<Text 
						style={styles.status_subtitle}
						numberOfLines={4}
					>
						{subtitle}
					</Text>
				</View>
			</View>
			
			<View style={styles.wrapper_comment}>
				{!isCommentLoading ? (
					comments.map((comment) => {
						return (
							<Comment
								key={comment.id}
								diary={comment}
							/>
						)
					})
				) : (
					<ActivityIndicator color="green" size="large" />
				)}
			</View>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		text: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
		liked: true
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		text: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
		liked: true
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
		liked: false
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
		liked: true
	}
];

export default ForumGroup;