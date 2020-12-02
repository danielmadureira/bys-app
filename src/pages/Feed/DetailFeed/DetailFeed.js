import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Image,
	Text,
	View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';

import { styles } from './styles'
import ImagemSVG from '../../../../assets/Feed-Example.jpg'

const DetailFeed = () => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title={FEED.title}
					subtitle={FEED.subtitle}
				/>
				<BackBase />
			</View>

			<View style={styles.wrapper_picture}>
				<Image style={styles.picture} source={FEED.picture} />
				<Text style={styles.picture_title}>
					
				</Text>
			</View>

			<View style={styles.wrapper_body}>
				<Text style={styles.body}>
					{FEED.body}
				</Text>
			</View>

		</ScrollView>
	);
};

const FEED = {
	picture: ImagemSVG,
	picture_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
	title: 'Orientações nutricionais no COVID-19',
	subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional (BRASPEN) - CRN 5/4298',
	data: '20 de Julho',
	body: `• Faça de alimentos in natura ou minimamente processados a base da alimentação. Esses alimentos são importantes para o sistema imunológico, além de contribuírem para uma alimentação adequada e saudável. Faça o consumo de alimentos de forma integral.

	• Utilize óleos, gorduras, sal e açúcar em pequenas quantidades no preparo das refeições. O uso exagerado destes pode contribuir para o ganho de peso, hipertensão e diabetes, condições que são fatores de risco para o Covid-19
	
	• Limite o consumo de alimentos processados e evite o consumo de alimentos ultraprocessados (aqueles que passam por várias transformações na indústria), estes são concentrados em açúcar simples e/ou ricos em sódio
	
	• Planeje o uso do tempo para dar atenção à alimentação o espaço que ela merece. Coma com regularidade e atenção, em ambientes apropriados e, sempre que possível, em horários semelhantes todos os dias
	
	• Faça compras em locais que ofertem variedades de alimentos in natura ou minimamente processados. Nesse momento de isolamento, minimize a ida aos mercados e feiras livres, prefira os fornecedores que fazem entrega em domicílio.
	
	• Desenvolva, exercite e partilhe habilidades culinárias. Coloque a mão na massa, aproveite o momento para pesquisar receitas saudáveis e introduzir novos alimentos e preparações. 
	
	• Planeje o uso do tempo para dar à alimentação o espaço que ela merece. Defina com antecedência os cardápios, planeje as compras de alimentos para caso precise se deslocar, não esquecer itens ou compra-los por impulso. 
	
	• Dê preferência, quando fora de casa, a locais que servem refeições feitas na hora. Evite consumir alimentos fora de casa nesse período de risco de contágiæo por coronavírus, mas, se por alguma necessidade, optar por comprar comida pronta prefira locais que façam na hora. 
	
	• Seja crítico quanto a mensagens e dados sobre alimentação em propagandas. Não existe alimento milagroso para o tratamento do Covid-19, como soluções ou shots, superalimentos e soroterapia por infusão endovenosa de nutrientes
	`
};

export default DetailFeed;