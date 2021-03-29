import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import {
	BackBase,
	NotificationCard,
	TitleHeader,
	ButtonBase
} from '../../../components';

import { styles } from './styles'

const AllMedicineNotification = ({ navigation }) => {
	const { medications } = useSelector(state => state.notifications)

	return (
		<View style={styles.container}>
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
					<ButtonBase
						title="Novo alerta"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => navigation.navigate('MedicineNotification', {
							notification: {}
						})}
					/>
				</View>

				<View style={styles.notifications}>
					{medications.length > 0 ?
						medications.map((v, i) => {
							return <NotificationCard
								height={80}
								key={i}
								notification={v}
								onPress={() => navigation.navigate('MedicineNotification', {
									notification: v
								})}
							/>
						})
						: <></>}
				</View>
			</ScrollView>
		</View>
	);
};

export default AllMedicineNotification;