import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
	TextInput,
	View,
	Pressable
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextBase, TitleHeader, ButtonBase } from '../../../components';

import { styles } from './styles'

const reference = [
	{
		imc: 'Menos que 18,5',
		resultado: 'Abaixo do peso'
	},
	{
		imc: 'Entre 18,5 e 24,9',
		resultado: 'Peso normal'
	},
	{
		imc: 'Entre 25 e 29,9',
		resultado: 'Sobrepeso'
	},
	{
		imc: 'Entre 30 e 34,9',
		resultado: 'Obesidade grau 1'
	},
	{
		imc: 'Entre 35 e 39,9',
		resultado: 'Obesidade grau 2'
	},
	{
		imc: 'Mais do que 40',
		resultado: 'Obesidade grau 3'
	}
]

const IMCCalculator = ({ navigation }) => {
	const [peso, setPeso] = useState('')
	const [altura, setAltura] = useState('')
	const [isVisible, setVisible] = useState(false)
	const [valorIMC, setValorIMC] = useState('')
	const [error, setError] = useState('')

	const calcular = () => {
		if (!peso) {
			setError('Você precisa adicionar seu peso em KG')
			return
		}

		if (!altura) {
			setError('Você precisa adicionar sua altura em CM')
			return
		}

		const weight = parseFloat(toNumericString(peso))
		const height = parseFloat(toNumericString(altura))

		const calculo = (
			(weight / (height * height)) * 10000
		).toFixed(2)

		setPeso('')
		setAltura('')
		setError('')
		setValorIMC(calculo)
		setVisible(true)
	}

	const toNumericString = (string, comma = true) => {
		if (comma) {
			return string
				.replace(/[,]/g, '.')
				.replace(/[^0-9.]/g, '');
		}
		return string.replace(/[^0-9]/g, '');
	}

	return (
		<ScrollView
			contentContainerStyle={styles.wrapper}
			style={styles.container}
		>
			<StatusBar style="light" backgroundColor="#000" />

			<Modal
				animationType="fade"
				visible={isVisible}
				transparent={true}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TextBase
							style={styles.modalTitle}
						>
							Seu IMC é: {valorIMC}
						</TextBase>
						<TextBase style={styles.modalText}>
							Veja a tabela de referência abaixo.
						</TextBase>

						<View style={styles.modalTable}>
							<TextBase style={styles.modalTableTitle}>IMC</TextBase>
							<TextBase style={styles.modalTableTitle}>Resultado</TextBase>
						</View>

						{reference.map((ref, i) =>
							<View style={styles.modalTableTexts} key={i}>
								<View style={styles.modalTableBorder}>
									<TextBase style={styles.modalTableText}>{ref.imc}</TextBase>
								</View>
								<View style={styles.modalTableBorder}>
									<TextBase style={styles.modalTableText}>{ref.resultado}</TextBase>
								</View>
							</View>
						)}
						<Pressable
							style={styles.button}
							onPress={() => setVisible(!isVisible)}
						>
							<TextBase>Fechar</TextBase>
						</Pressable>
					</View>
				</View>
			</Modal>

			<View style={styles.container_header}>
				<TitleHeader
					title="Índice IMC"
					subtitle="O IMC é reconhecido como padrão internacional
					para avaliar o grau de sobrepeso e obesidade.
					É calculado dividindo o peso (em kg) pela
					altura ao quadrado (em metros)."
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
					value={String(peso)}
					keyboardType="numeric"
					onChangeText={(peso) => setPeso(toNumericString(peso))}
					selectTextOnFocus
				/>

				<TextInput
					placeholder="Sua altura em centímetros"
					style={styles.input}
					value={altura}
					keyboardType="number-pad"
					onChangeText={(altura) => {
						setAltura(toNumericString(altura, false))
					}}
					selectTextOnFocus
				/>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Descobrir o IMC"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={calcular}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default IMCCalculator;
