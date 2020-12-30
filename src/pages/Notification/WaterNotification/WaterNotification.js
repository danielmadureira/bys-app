import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextCard, TitleHeader } from '../../../components';
import Notification from '../Notification';

import { styles } from './styles'


const WaterNotification = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Alerta de ingestão de água"
					subtitle="Controle seu consumo de água e receba notificações sempre que precisar beber água."
				/>
				<BackBase navigation={navigation} />
			</View>

			
			<Notification type='water' />
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

export default WaterNotification;