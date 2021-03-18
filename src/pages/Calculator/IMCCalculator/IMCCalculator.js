import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
	Alert,
	TextInput,
	View,
	Text,
	Pressable
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
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
		let valorIMC = (
			parseFloat(peso) / (
				parseFloat(altura) * parseFloat(altura)
			)
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
						<Text 
							style={styles.modalTitle}
						>
							Seu IMC é: {calcula(peso, altura)}
						</Text>
						<Text style={styles.modalText}>
							Veja a tabela de referência abaixo.
						</Text>

						<View style={styles.modalTable}>
							<Text style={styles.modalTableTitle}>IMC</Text>
							<Text style={styles.modalTableTitle}>Resultado</Text>
						</View>

						{reference.map(ref => 
							<View style={styles.modalTableTexts}>
								<View style={styles.modalTableBorder}>
									<Text style={styles.modalTableText}>{ref.imc}</Text>
								</View>
								<View style={styles.modalTableBorder}>
									<Text style={styles.modalTableText}>{ref.resultado}</Text>
								</View>
							</View>
						)}
						<Pressable
							style={styles.button}
							onPress={() => setVisible(!isVisible)}
						>
							<Text>Fechar</Text>
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
					placeholder="Sua altura em metros"
					style={styles.input}
					value={altura}
					keyboardType="numeric"
					onChangeText={(altura) => setAltura(altura.replace(',', '.'))}
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