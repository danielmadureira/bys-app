import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';
import LogoPNG from '../../../assets/logo.png';
import ButtonBase from '../../components/base/ButtonBase';

const Login = (props) => {
	const { navigation  } = props;

	return (
		<ScrollView contentContainerStyle={styles.container}>

			<View style={styles.container_image}>
				<Image
					style={styles.image}
					source={LogoPNG}
				/>
			</View>

			<View style={styles.container_flex}>
				<View style={styles.wrapper_button}>
					<Text style={styles.title}>Login</Text>
				</View>
				
				<TextInput
					placeholder="E-mail"
					style={styles.input}
				/>
				<TextInput
					placeholder="Senha"
					secureTextEntry={true}
					style={styles.input}
				/>
				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Entrar"
						onPress={() => {
							navigation.navigate('Feed')
						}}
					/>

					<Text style={styles.textHelper}>
						Preciso de ajuda para acessar
					</Text>
					<Text style={styles.textHelper}>
						Ainda não possui uma conta? 
						<Text 
						style={styles.register}
						onPress={() => {
							navigation.navigate('Register')
						}}>
							&nbsp;Criar conta
						</Text>
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default Login;