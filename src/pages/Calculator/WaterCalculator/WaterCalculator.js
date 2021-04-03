import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
	Alert,
	View,
	TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {BackBase, TitleHeader, ButtonBase, TextBase} from '../../../components';
import { WaterIngestionAlertService } from "../../../services/AlertService";

import { styles } from './styles'


const WaterCalculator = ({ navigation }) => {
	const [peso, setPeso] = useState('')
	const [error, setError] = useState('')

	const calcula = (peso) => {
		const mlPerKilo = (new WaterIngestionAlertService()).ML_PER_KILO
		const valor = (parseFloat(toNumericString(peso)) * mlPerKilo)

		if (!peso) {
			setError('Você precisa adicionar seu peso em KG')
			return
		}

		Alert.alert(
			"Você deve consumir por dia:",
			`${valor} ml de água`,
			[
				{ text: "OK" }
			],
			{ cancelable: false }
		);
		setPeso('')
		setError('')
	}

	const toNumericString = (string) => {
		return string
			.replace(/[,]/g, '.')
			.replace(/[^0-9.]/g, '');
	}

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Ingestão de água"
					subtitle="A hidratação também deve ser seguida de forma equilibrada. Saiba a quantidade de água que deve ingerir no dia a dia."
				/>
				<BackBase navigation={navigation} />
			</View>

			<View style={styles.wrapper}>
				{
					error ?
						<View style={styles.error_wrapper}>
							<TextBase style={styles.errorMessage}>{error}</TextBase>
						</View>
						: null
				}

				<TextInput
					style={styles.input}
					placeholder="Seu peso em quilogramas"
					value={peso}
					keyboardType="numeric"
					selectTextOnFocus
					onChangeText={(peso) => setPeso(toNumericString(peso))}
				/>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Calcular"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => calcula(peso)}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default WaterCalculator;
