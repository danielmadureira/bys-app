import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { BackBase, TextCard, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';

import { styles } from './styles'


const Notification = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper}>

			<TextInput
				style={styles.input}
				placeholder="Nome do medicamento"
			/>

			<TextInput
				style={styles.input}
				placeholder="Horário do alerta"
			/>

			<View style={styles.wrapper_button}>
				<ButtonBase
					title="Salvar alerta"
					background="#EAEBCF"
					color="#000"
					radius={15}
				/>
			</View>
		</ScrollView>
	);
};

export default Notification;