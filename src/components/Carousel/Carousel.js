import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { CardImage, TitleHeader } from '../../components';

import { styles } from "./styles";
import ImagemSVG from '../../../assets/Feed-Example.jpg'
import ButtonBase from '../../components/base/ButtonBase';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Orientações nutricionais no COVID-19',
		subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		picture: ImagemSVG,
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Orientações nutricionais no COVID-19',
		subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		picture: ImagemSVG,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Orientações nutricionais no COVID-19',
		subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
		picture: ImagemSVG,
	},
];

const Carousel = (props) => {
	const { history } = props;
	return (
		<ScrollView horizontal contentContainerStyle={styles.container}>
			<View style={styles.container_header}>
				<TitleHeader 
					title="Feed"
					subtitle="Veja as últimas novidades"
				/>
			</View>
		</ScrollView>
	)
}

export default Carousel;