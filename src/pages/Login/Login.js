import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';
import LogoPNG from '../../../assets/logo.png';
import ButtonBase from '../../components/base/ButtonBase';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/user';
import { AuthServices } from '../../services/AuthServices';
import { SecureStoreServices } from '../../services/SecureStoreServices';

const Login = (props) => {
	const { navigation } = props
	const dispatch = useDispatch()

	const [email, setEmail] = useState('administrator@bys-app.com')
	const [password, setPassword] = useState('123')

	const login = () => {
		SecureStoreServices.deleteItemAsync('_token')
		AuthServices.authenticate({
			email,
			password: 'c19760e4c50be2ef8b7c479d2a8cc67e230659e5625ddb31b03ceabc15eea849',
			device_name: 'emulator_client'
		})
		.then(async (res) => {
			await SecureStoreServices.setItemAsync('_token', res.plainTextToken)

			dispatch(actions.getUser())
			navigation.navigate('Feed')
		})
		.catch(err => console.log(err, 'Error'))
	}

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
					value={email}
					onChangeText={(email) => setEmail(email)}
				/>
				<TextInput
					placeholder="Senha"
					secureTextEntry={true}
					style={styles.input}
					value={password}
					onChangeText={(password) => setPassword(password)}
				/>
				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Entrar"
						onPress={() => { login() }}
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
							}}
						>
							Criar conta
						</Text>
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default Login;