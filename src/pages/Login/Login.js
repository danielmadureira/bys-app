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

			<Text style={styles.title}>Login</Text>
			<View style={styles.container_flex}>
				<TextInput
					placeholder="E-mail"
					style={styles.input}
				/>
				<TextInput
					placeholder="Senha"
					secureTextEntry={true}
					style={styles.input}
				/>

				<ButtonBase
					title="Entrar"
					onPress={() => {
						navigation.navigate('Feed')
					}}
				/>
			</View>

			<Text style={styles.textHelper}>
				Preciso de ajuda para acessar
			</Text>
		</ScrollView>
	)
}

export default Login;