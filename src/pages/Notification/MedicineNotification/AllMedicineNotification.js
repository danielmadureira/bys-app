import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, MessageBase, TitleHeader } from '../../../components';

import { styles } from './styles'


const AllMedicineNotification = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Alerta de medicamento"
					subtitle="Todos os seus alertas"
				/>
				<BackBase navigation={navigation} />
			</View>

			<View style={styles.notifications}>
				{SECTIONS.map((v, i) => {
					return <MessageBase 
						height={80} 
						key={i} 
						diary={v}
						onPress={() => navigation.navigate('MedicineNotification')}
					/>
				})}
			</View>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		title: 'Rémedio Azul',
		texto: 'Todos os dias.'
	},
	{
		title: 'Rémedio Verde',
		texto: 'Seg./Ter./Sex. às 11hrs.'
	}
];

export default AllMedicineNotification;