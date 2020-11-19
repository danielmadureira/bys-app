import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextCard, TitleHeader } from '../../components';

import { styles } from './styles'


const Notification = () => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Alertas"
					subtitle="Crie alertas que te ajudam a manter a qualidade de vida"
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
        title: 'Alertas de medicamento',
        texto: 'Nunca mais perca o horário do seu medicamento. Adicione alertas para todos os seus medicamentos.'
    },
	{
        title: 'Alertas de ing. de água',
        texto: 'Controle seu consumo de água e receba notificações sempre que precisar beber água. '
	}
];

export default Notification;