import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
	Text,
	View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackBase, Comment, TitleHeader } from '../../../components'

import { styles } from './styles'
import ProfileImage from '../../../../assets/Profile-picture.png'

const GroupMessage = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Sala de conversa"
					subtitle="Deixe um depoimento"
				/>
				
				<BackBase />
			</View>

			<View style={styles.wrapper_status}>
				<View style={styles.status}>
					<Text style={styles.status_title}>Sala de descompressão</Text>
					<Text style={styles.status_subtitle}>
						Este espaço é dedicado para aqueles que querem
						compartilhar experiências não relacionadas ao COVID-19.
					</Text>
				</View>
			</View>
			
			<View style={styles.wrapper_comment}>
				{SECTIONS.map((v, i) => {
					return <Comment
							key={i}
							diary={v}
						/>
				})}
			</View>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
	},
	{
		name: 'Amanda M. Gonze',
		profile: ProfileImage,
		profession: 'Chefe de enfermagem',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: 'Enviado ontem, às 15:30',
	}
];

export default GroupMessage;