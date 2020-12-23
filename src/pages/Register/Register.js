import React from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { BackBase, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';

const Register = (props) => {
	const { navigation } = props;

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Cadastro"
					subtitle={
						<BackBase navigation={navigation} />
					}
				/>
			</View>

			<View style={styles.message_container}>	
				<View style={styles.message}>		
					<TextInput
						placeholder="E-mail"
						style={styles.input}
					/>

					<TextInput
						placeholder="Nome"
						style={styles.input}
					/>

					<TextInput
						placeholder="Sobrenome"
						style={styles.input}
					/>

					<TextInput
						placeholder="Profissão"
						style={styles.input}
					/>
				</View>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Continuar"
						onPress={() => {
							navigation.navigate('RegisterPassword')
						}}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default Register;