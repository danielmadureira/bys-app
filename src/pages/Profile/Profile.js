import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
	ImageBackground,
	View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { BackBase, ButtonSettings, TextBase, TitleHeader } from '../../components'
import BodyWriteDiary from '../Diary/WriteDiary/BodyWriteDiary'

import DefaultProfile from '../../../assets/default-user.png'
import { styles } from './styles'
import InputBase from '../../components/base/InputBase'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import { SecureStoreServices } from '../../services/SecureStoreServices'
import { AuthServices } from '../../services/AuthServices'
import { actions } from '../../store/user';

const ProfileSchema = Yup.object().shape({
	status: Yup
		.string()
})

const Profile = ({ navigation }) => {

	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const [isEditMode, setEditMode] = useState(false)

	const saveEdition = () => {
		setEditMode(false)
	}

	const logout = () => {
		SecureStoreServices.deleteItemAsync('_token')
		AuthServices.unauthenticate()
			.then(async (res) => {
				console.log(res)
				dispatch(actions.unauthenticate())
			})
			.catch(err => console.log(err, 'Error'))
	}

	useEffect(() => {
		console.log(user.name)
		if (!user.name) {
			navigation.navigate('Home')
		}
	}, [user])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<Formik
				initialValues={{
					status: '',
				}}
				validationSchema={ProfileSchema}
				onSubmit={values => {

				}}
			>
				{({ handleSubmit, isValid, setFieldTouched, setFieldValue }) => (<>
					<View style={styles.container_header}>
						<TitleHeader
							title="Perfil"
							subtitle="Vamos falar sobre você"
						/>
						<BackBase navigation={navigation} />
					</View>

					<View style={styles.wrapper}>
						{/** User's Background Picture */}
						<ImageBackground
							source={{ uri: user.profile_picture }}
							imageStyle={styles.image}
							style={styles.profile}
							blurRadius={2.5}
						>
						</ImageBackground>

						{/** User's Profile Picture */}
						<View style={styles.profile_image_wrapper}>
							<ImageBackground
								source={
									user.profile_picture ?
										{ uri: user.profile_picture } :
										DefaultProfile
								}
								imageStyle={styles.profile_image}
								style={styles.profile}
							>
							</ImageBackground>
						</View>
					</View>

					{/** Icons with actions*/}
					<View style={styles.actions_icons}>
						<View style={styles.icon_edit}>
							{!isEditMode ? (
								<ButtonSettings
									type="warning"
									onPress={() => setEditMode(true)}
								>
									Editar
								</ButtonSettings>
							) : (
								<ButtonSettings
									type="success"
									onPress={() => saveEdition()}
								>
									Salvar
								</ButtonSettings>
							)}
						</View>
						<View style={styles.icon_edit}>
							<ButtonSettings
								type="danger"
								onPress={() => logout()}
							>
								Sair
						</ButtonSettings>
						</View>
					</View>

					{/** User's Name and Profession */}
					<View style={styles.wrapper}>
						<TextBase style={styles.profile_name}>
							{user.name}
						</TextBase>
						<TextBase style={styles.profile_profession}>
							{user.profession}
						</TextBase>
					</View>

					{/** User's Mood */}
					<View style={styles.wrapper_status}>
						<View style={styles.status}>
							<TextBase style={styles.status_title}>Hoje estou me sentindo:</TextBase>
							{isEditMode ? (
								<Field
									component={InputBase}
									name="status"
									placeholder="Abençoada"
									style={styles.status_title}
								/>
							) : (
								<TextBase style={styles.status_title}>Abençoada</TextBase>
							)}
						</View>
					</View>
				</>)}
			</Formik>

			{/** User's Diary */}
			<View style={styles.message_container}>
				<ImageBackground
					source={require(`../../../assets/message-background.jpg`)}
					imageStyle={styles.message_container}
					style={styles.message_image}
				>
					<View style={styles.message_title}>
						<TextBase style={styles.title}>Meu diário</TextBase>
					</View>
					<BodyWriteDiary
						btnStyle={styles.wrapper_button}
						containerStyle={styles.message}
						numberOfLines={6}
					/>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

export default Profile;