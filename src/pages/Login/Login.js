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
import { encryptPassword } from '../../helpers/registerHelper';
import { AlertBase, TextBase } from '../../components';
import { ActivityIndicator } from 'react-native';

const Login = (props) => {
	const { navigation } = props
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showError, setShowError] = useState(false)
	const [isLoading, setLoading] = useState(false)

	const login = () => {
		setLoading(true)
		SecureStoreServices.deleteItemAsync('_token')
		AuthServices.authenticate({
			email,
			password: encryptPassword(password),
			device_name: 'emulator_client'
		})
			.then(async (res) => {
				setShowError(false)
				setLoading(false)
				await SecureStoreServices.setItemAsync(
					'_token',
					res.token
				)

				dispatch(actions.getUser())
				navigation.navigate('Feed')
			})
			.catch(err => {
				setShowError(true)
				setLoading(false)
			})
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
					<TextBase style={styles.title}>
						Login
					</TextBase>
				</View>
				{showError && (
					<View style={styles.wrapper_alert}>
						<AlertBase type="warning">
							Usuário ou senha estão incorretos.
						</AlertBase>
					</View>
				)}

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
					{isLoading && (
						<ActivityIndicator
							size="large"
							color="green"
							animating={isLoading}
						/>
					)}

					<TextBase style={styles.textLink}>
						Preciso de ajuda para acessar
					</TextBase>
					<TextBase style={styles.textHelper}>
						Ainda não possui uma conta?&nbsp;
						<Text
							style={styles.register}
							onPress={() => {
								navigation.navigate('Register')
							}}
						>
							Criar conta
						</Text>
					</TextBase>
				</View>
			</View>
		</ScrollView>
	)
}

export default Login;