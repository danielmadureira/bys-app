import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Text,
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MessageBase, TitleHeader } from '../../../components';

import { styles } from './styles'

const GroupMessage = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Sala de conversa"
					subtitle="Deixe um depoimento"
				/>
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

			{SECTIONS.map((v, i) => {
				return <MessageBase key={i} diary={v} />
			})}
		</ScrollView>
	);
};

const SECTIONS = [
	{
		title: 'Orientações nutricionais no COVID-19',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: '20 de Julho',
	},
	{
		title: 'Orientações nutricionais no COVID-19',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: '20 de Julho',
	},
	{
		title: 'Orientações nutricionais no COVID-19',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: '20 de Julho',
	},
	{
		title: 'Orientações nutricionais no COVID-19',
		texto: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		data: '20 de Julho',
	}
];

export default GroupMessage;