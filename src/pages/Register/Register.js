import React, { useEffect } from 'react';
import { View, Alert, Image, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { BackBase, TitleHeader, ButtonBase, InputBase } from '../../components';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/register';
import * as ImagePicker from 'expo-image-picker';


const RegisterSchemaStepOne = Yup.object().shape({
	email: Yup
		.string()
		.email('Este e-mail é inválido')
		.required('Este campo é obrigatório'),
	name: Yup
		.string()
		.required('Este campo é obrigatório'),
	profession: Yup.string(),
	image: Yup.string()
})

const Register = (props) => {
	const { navigation } = props;
	const dispatch = useDispatch()

	const getPermission = async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			return status
		}
	}
	useEffect(() => {
		(async () => {
			const status = await getPermission()
			if (status !== 'granted') {
				Alert.alert(
					null,
					"Desculpe, precisamos ter permissão para acessar a galeria de imagens.",
					[
						{
							text: "OK",
							onPress: () => {
								// props.navigation.navigate('Home')
							}
						}
					],
					{ cancelable: false }
				);
			}
		})()
	}, [])

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
					email: '',
					name: '',
					profession: '',
					image: ''
				}}
				validationSchema={RegisterSchemaStepOne}
				onSubmit={values => {
					dispatch(actions.registerStepOne(values))
					navigation.navigate('RegisterPassword')
				}}
			>
				{({ handleSubmit, isValid, setFieldTouched, setFieldValue }) => (<>
					<View style={styles.message_container}>
						<View style={styles.message}>
							<TouchableOpacity
								onPress={async () => {
									const status = await getPermission()
									if (status === 'granted') {
										let result = await ImagePicker.launchImageLibraryAsync({
											mediaTypes: ImagePicker.MediaTypeOptions.All,
											allowsEditing: true,
											aspect: [4, 3],
											quality: 1,
										});

										if (result.uri) {
											setFieldValue('image', result.uri)
											setFieldTouched('image', true)
										}
									}
								}}
							>
								<Image
									source={require(`../../../assets/add-user.png`)}
								/>
							</TouchableOpacity>
						</View>
						<Field
							component={InputBase}
							name="email"
							keyboardType="email-address"
							placeholder="E-mail"
						/>

						<Field
							component={InputBase}
							name="name"
							placeholder="Nome"
						/>

						<Field
							component={InputBase}
							name="profession"
							placeholder="Profissão"
						/>

						<View style={styles.wrapper_button}>
							<ButtonBase
								title="Continuar"
								onPress={handleSubmit}
								disabled={!isValid}
							/>
						</View>
					</View>
				</>)}
			</Formik>
		</ScrollView>
	)
}

export default Register;