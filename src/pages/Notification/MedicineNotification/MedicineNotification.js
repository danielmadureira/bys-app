import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
import Notification from '../Notification';

import { styles } from './styles'

const MedicineNotification = ({ navigation, route }) => {
	const { notification } = route.params
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Alerta de medicamento"
					subtitle="Nunca mais perca o horário do seu medicamento. Adicione alertas para todos os seus medicamentos."
				/>
				<BackBase navigation={navigation} />
			</View>

			<View style={styles.wrapper}>
				<Notification
					navigation={navigation}
					medication={notification}
				/>
			</View>
		</ScrollView>
	);
};

export default MedicineNotification;