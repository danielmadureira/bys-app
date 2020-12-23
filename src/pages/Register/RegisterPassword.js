import React from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { BackBase, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';

const RegisterPassword = (props) => {
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
						placeholder="Senha"
						style={styles.input}
					/>

					<TextInput
						placeholder="Confirmar senha"
						style={styles.input}
					/>
				</View>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Cadastrar"
						onPress={() => {
							navigation.navigate('Home')
						}}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default RegisterPassword;