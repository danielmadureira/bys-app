import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Alert,
	TextInput,
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
import ButtonBase from '../../../components/base/ButtonBase';

import { styles } from './styles'


const IMCCalculator = () => {
	const [peso, setPeso] = useState(0)
	const [altura, setAltura] = useState(0)

	const calcula = (peso, altura) => {
		let valorIMC = parseFloat((peso / (altura * altura))).toFixed(2);

		Alert.alert(
      "Seu IMC é:",
      valorIMC,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
	}

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Índice IMC"
					subtitle="O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros)."
				/>
				<BackBase />
			</View>

			<View style={styles.wrapper}>
				<TextInput
					style={styles.input}
					placeholder="Seu peso em quilogramas"
					value={peso}
					onChangeText={(peso) => setPeso(peso)}
				/>

				<TextInput
					placeholder="Sua altura em metros"
					style={styles.input}
					value={altura}
					onChangeText={(altura) => setAltura(altura)}
				/>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Descobrir o IMC"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => calcula(peso, altura)}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default IMCCalculator;