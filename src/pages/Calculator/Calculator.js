import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextCard, TitleHeader } from '../../components';

import { styles } from './styles'


const Calculator = () => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Calculadoras"
					subtitle="Na medida certa"
				/>
			</View>

				{SECTIONS.map((v, i) => {
					return <View key={i} style={styles.wrapper_menu}>
						<TextCard diary={v} />
					</View>
				})}
		</ScrollView>
	);
};

const SECTIONS = [
	{
        title: 'Índice IMC',
        texto: 'Descubra instantaneamente seu Índice de Massa Corpórea ideal através desta simples calculadora.'
    },
	{
        title: 'Ingestão de água',
        texto: 'Descubra a quantidade de água que você precisa consumir todos os dias para se manter em forma.'
	}
];

export default Calculator;