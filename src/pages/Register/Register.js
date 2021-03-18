import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { BackBase, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import InputBase from '../../components/base/InputBase';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/register';
import * as ImagePicker from 'expo-image-picker';
import { Image, Platform } from 'react-native';

const RegisterSchemaStepOne = Yup.object().shape({
	email: Yup
		.string()
		.email('Este e-mail é inválido')
		.required('Este campo é obrigatório'),
	name: Yup
		.string()
		.required('Este campo é obrigatório'),
	profession: Yup.string(),
	profile_picture: Yup.string()
})

const Register = (props) => {
	const { navigation } = props;
	const dispatch = useDispatch()

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
				
				if (status !== 'granted') {
					alert('Desculpe, precisamos ter permissão para continuar.');
				}
			}
		})()
	})

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
					profile_picture: ''
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
									let result = await ImagePicker.launchImageLibraryAsync({
										mediaTypes: ImagePicker.MediaTypeOptions.All,
										allowsEditing: true,
										aspect: [4, 3],
										quality: 1,
									});
							
									console.log(result);
							
									if (result.uri) {
										setFieldValue('profile_picture', result.uri)
										setFieldTouched('profile_picture', true)
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