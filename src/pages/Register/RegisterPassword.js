import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { BackBase, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';
import InputBase from '../../components/base/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/register';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';

const RegisterSchemaStepTwo = Yup.object().shape({
	password: Yup
		.string()
		.min(6, ({ min }) => 'Mínimo de 6 dígitos')
		.required('Este campo é obrigatório'),
	confirmPassword: Yup
		.string()
		.oneOf([Yup.ref('password')], 'As senhas não são iguais')
		.min(6, ({ min }) => 'Mínimo de 6 dígitos')
		.required('Este campo é obrigatório')
})

const RegisterPassword = (props) => {
	const { navigation } = props;
	const dispatch = useDispatch()
  const register = useSelector(state => state.register)
	let isLoading = register.isLoading

	useEffect(() => {
		console.log(isLoading)
		// navigation.navigate('Home')
	}, [isLoading])

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
			
			<Formik 
				initialValues={{
					password: '',
					confirmPassword: '',
				}}
				validationSchema={RegisterSchemaStepTwo}
				onSubmit={values => {
					delete register.isLoading
					delete register.confirmPassword

					let form = {
						...register,
						...values
					}
					dispatch(actions.registerStepTwo(form))
				}}
			>
			{({ handleSubmit, isValid }) => (
				<View style={styles.message_container}>	
					<View style={styles.message}>
						<Field 
							component={InputBase}
							name="password"
							placeholder="Senha"
							secureTextEntry={true}
						/>
						
						<Field 
							component={InputBase}
							name="confirmPassword"
							placeholder="Confirmar senha"
							secureTextEntry={true}
						/>
					</View>

					<View style={styles.wrapper_button}>
						<ButtonBase
							title="Cadastrar"
							onPress={handleSubmit}
						/>
					</View>
				</View>
			)}
			</Formik>
		</ScrollView>
	)
}

export default RegisterPassword;