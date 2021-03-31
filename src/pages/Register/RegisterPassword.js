import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import {
	AlertBase,
	BackBase,
	TitleHeader,
	ButtonBase,
	InputBase
} from '../../components';
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
	let error = register.error

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				dispatch(actions.isLoading(false))
				navigation.navigate('Home')
			}, 1500);
		}
	}, [isLoading])

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				dispatch(actions.loadErrors(null))
			}, 1500);
		}
	}, [error])

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
						{register.isLoading &&
							<AlertBase type="success">
								Cadastrado com sucesso.
								Efetue Login.
							</AlertBase>
						}

						{register.error &&
							<View style={{ width: '95%' }}>
								<AlertBase type="danger">
									{register.error}
								</AlertBase>
							</View>
						}

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