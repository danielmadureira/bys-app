import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	Alert,
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {BackBase, TitleHeader, ButtonBase, TextBase} from '../../../components';
import { actions } from '../../../store/notification'

import { styles } from './styles'

const WaterNotification = ({ navigation }) => {
	const { water_ingestion } = useSelector(state => state.notifications)
	const [weight, setWeight] = useState(null)
	const [ error, setError ] = useState('')
	const dispatch = useDispatch()

	const callMenssage = () => {
		Alert.alert(
			"Alerta cadastrado.",
			"Agora você pode controlar seu consumo de água!",
			[
				{
					text: "OK",
					onPress: () => {
						setWeight('')
						navigation.goBack()
					}
				}
			],
			{ cancelable: false }
		);
	}

	const saveAlert = () => {
		const numericInput = toNumericString(weight)
		if (numericInput <= 0) {
			setError('Você precisa adicionar seu peso em KG')
			return
		}

		try {
			dispatch(actions.createWaterAlert(numericInput))
			callMenssage()
		} catch (error) {
			setError(
				'Houve um erro desconhecido ao tentar salvar as'
				+ ' informações deste alarme. Tente novamente.'
			)
		}
	}

	const toNumericString = (string) => {
		return string
			.replace(/[,]/g, '.')
			.replace(/[^0-9.]/g, '');
	}

	useEffect(() => {
		setWeight(water_ingestion.weight)
		setError('')
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
				{
					error ?
						<View style={styles.error_wrapper}>
							<TextBase style={styles.errorMessage}>{error}</TextBase>
						</View>
						: null
				}

				<TextInput
					style={styles.input}
					placeholder="Seu peso em kg"
					keyboardType="decimal-pad"
					onChangeText={(text) => setWeight(toNumericString(text))}
					value={weight}
					selectTextOnFocus
				/>

				<View style={styles.btn_wrapper}>
					<ButtonBase
						title="Salvar alerta"
						keyboardType="numeric"
						radius={5}
						onPress={saveAlert}
					/>

					{water_ingestion.weight !== '' && (
						<ButtonBase
							background="#EC9F9A"
							title="Remover alerta"
							radius={5}
							onPress={() => {
								dispatch(actions.deleteWaterAlert())
								navigation.goBack()
							}}
						/>
					)}
				</View>
			</View>
		</ScrollView>
	);
};

export default WaterNotification;
