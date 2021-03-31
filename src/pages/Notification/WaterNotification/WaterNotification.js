import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AlertBase, BackBase, TitleHeader } from '../../../components';
import ButtonBase from '../../../components/base/ButtonBase';
import { actions } from '../../../store/notification'

import { styles } from './styles'

const WaterNotification = ({ navigation }) => {
	const { water_ingestion } = useSelector(state => state.notifications)
	const [weight, setWeight] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		setWeight(water_ingestion.weight)

	}, [water_ingestion])

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

			<View style={styles.body}>
				<TextInput
					style={styles.input}
					placeholder="Seu peso em kg"
					keyboardType="decimal-pad"
					onChangeText={(text) => setWeight(text)}
					value={weight}
				/>

				<View style={styles.wrapper}>
					<ButtonBase
						title="Salvar alerta"
						radius={5}
						onPress={() => {
							dispatch(actions.addWeight(weight))
							navigation.goBack()
						}}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default WaterNotification;