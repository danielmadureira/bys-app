import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, MessageBase, TitleHeader } from '../../components';

import { styles } from './styles'
import ButtonBase from '../../components/base/ButtonBase';

const Diary = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Todos os meus dias"
					subtitle="Esta é sua história"
				/>
				<BackBase navigation={navigation} />
			</View>

			<View style={styles.wrapper_button}>
				<ButtonBase
					title="Escrever no diário"
					background="#EAEBCF"
					color="#000"
					radius={15}
					onPress={() => navigation.navigate('WriteDiary')}
				/>
			</View>

			<View style={styles.messages}>
				{SECTIONS.map((v, i) => {
					return <MessageBase key={i} diary={v} />
				})}
			</View>
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

export default Diary;