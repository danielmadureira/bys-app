import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Alert,
	View,
	TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
import ButtonBase from '../../../components/base/ButtonBase';

import { styles } from './styles'


const WaterCalculator = ({ navigation }) => {
	const [peso, setPeso] = useState(0)

	const calcula = (peso) => {
		let valor = (parseFloat(peso) * 35)

		Alert.alert(
			"Você deve consumir por dia:",
			`${valor} ml de água`,
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
					title="Ingestão de água"
					subtitle="A hidratação também deve ser seguida de forma equilibrada. Saiba a quantidade de água que deve ingerir no dia a dia."
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