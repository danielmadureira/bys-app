import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextCard, TitleHeader } from '../../components';
import * as Permissions from 'expo-permissions'

import { styles } from './styles'

const MainNotification = ({ navigation }) => {

	const checkMultiPermissions = async () => {
		const { permissions } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);

		if (!permissions.notifications.granted) {
			await Permissions.askAsync(Permissions.NOTIFICATIONS)
		}
	}

	useEffect(() => {
		(async () => {
			await checkMultiPermissions()
		})()
	}, [])

	return (
		<ScrollView contentContainerStyle={styles({}).wrapper} style={styles({}).container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles({}).container_header}>
				<TitleHeader
					title="Alertas"
					subtitle="Crie alertas que te ajudam a manter a qualidade de vida"
				/>
				<BackBase initial navigation={navigation} />
			</View>

			<View style={styles({}).wrapper_menu}>
				<TextCard
					icon
					diary={SECTIONS[0]}
					event={() => navigation.navigate('AllMedicineNotification')}
				/>
			</View>
			<View style={styles({}).wrapper_menu}>
				<TextCard
					icon
					diary={SECTIONS[1]}
					event={() => navigation.navigate('WaterNotification')}
				/>
			</View>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		name: 'Alertas de medicamento',
		description: 'Nunca mais perca o horário do seu medicamento. Adicione alertas para todos os seus medicamentos.'
	},
	{
		name: 'Alertas de ing. de água',
		description: 'Controle seu consumo de água e receba notificações sempre que precisar beber água. '
	}
];

export default MainNotification;