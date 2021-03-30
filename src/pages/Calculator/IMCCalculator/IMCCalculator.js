import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
	TextInput,
	View,
	Pressable
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextBase, TitleHeader } from '../../../components';
import ButtonBase from '../../../components/base/ButtonBase';

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
	const [peso, setPeso] = useState(0)
	const [altura, setAltura] = useState(0)
	const [isVisible, setVisible] = useState(false)

	const calcula = (peso, altura) => {
		let height = altura.replace(',', '')
		height = height.replace('.', '')

		let valorIMC = (
			(parseFloat(peso) / (
				parseFloat(height) * parseFloat(height)
			)) * 10000
		).toFixed(2);
		return valorIMC
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
							Seu IMC é: {isVisible && calcula(peso, altura)}
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
				<TextInput
					style={styles.input}
					placeholder="Seu peso em quilogramas"
					value={peso}
					keyboardType="numeric"
					onChangeText={(peso) => setPeso(peso.replace(',', '.'))}
				/>

				<TextInput
					placeholder="Sua altura em centímetros"
					style={styles.input}
					value={altura}
					keyboardType="number-pad"
					onChangeText={(altura) => setAltura(altura)}
				/>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Descobrir o IMC"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => setVisible(true)}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default IMCCalculator;