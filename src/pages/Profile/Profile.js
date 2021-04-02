import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
	ImageBackground,
	View,
	Image
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import {
	AlertBase,
	BackBase,
	ButtonSettings,
	TextBase,
	TitleHeader
} from '../../components'
import BodyWriteDiary from '../Diary/WriteDiary/BodyWriteDiary'

import DefaultProfile from '../../../assets/default-user.png'
import { styles } from './styles'
import InputBase from '../../components/base/InputBase'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import { AuthServices } from '../../services/AuthServices'
import { actions } from '../../store/user'
import { actions as feedActions } from '../../store/diary'
import { SecureStoreAdapter } from '../../adapter/SecureStoreAdapter'
import * as ImagePicker from 'expo-image-picker'

const ProfileSchema = Yup.object().shape({
	status: Yup.string(),
	image: Yup.string(),
	emoticon: Yup.string(),
	name: Yup.string(),
	profession: Yup.string()
})

const Profile = ({ navigation }) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const [isEditMode, setEditMode] = useState(false)
	const [imagePath, setPath] = useState('')
	const { isSend } = useSelector(state => state.diary)

	useEffect(() => {
		if (isSend) {
			setTimeout(() => {
				dispatch(feedActions.isSend(false))
			}, 2500);
		}
	}, [isSend])

	const updateProfile = (form) => {
		setEditMode(false)
		dispatch(actions.updateProfile(form))
	}

	const activeEditMode = () => {
		setEditMode(true)
		setPath('')
	}

	const logout = () => {
		AuthServices.unauthenticate()
			.then(async (res) => {
			})
			.catch(err => { })
		SecureStoreAdapter.deleteItemAsync('_token')
		dispatch(actions.unauthenticate())
		navigation.navigate('Home')
	}

	return (
		<ScrollView
			contentContainerStyle={styles.wrapper}
			style={styles.container}
		>
			<StatusBar style="light" backgroundColor="#000" />
			<Formik
				initialValues={{
					status: '',
					image: '',
					emoticon: '',
					name: '',
					profession: ''
				}}
				validationSchema={ProfileSchema}
				onSubmit={(values, { resetForm }) => {
					if (user.mood.emoji_hex) {
						values.emoticon = user.mood.emoji_hex
					}
					updateProfile(values)
					resetForm()
				}}
			>
				{({
					values,
					handleSubmit,
					isValid,
					setFieldTouched,
					setFieldValue,
				}) => (<>
					<View style={styles.container_header}>
						<TitleHeader
							title="Perfil"
							subtitle="Vamos falar sobre você"
						/>
						<BackBase initial navigation={navigation} />
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
						{!isEditMode ? (
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
						) : (
							<View style={styles.update_image_wrapper}>
								<TouchableOpacity
									onPress={async () => {
										let result = await ImagePicker.launchImageLibraryAsync({
											mediaTypes: ImagePicker.MediaTypeOptions.All,
											allowsEditing: true,
											aspect: [4, 3],
											quality: 1,
										});

										if (result.uri) {
											setPath(result.uri)
											setFieldValue('image', result.uri)
											setFieldTouched('image', true)
										}
									}}
								>
									<Image
										style={styles.update_profile_image}
										source={
											imagePath !== '' ?
												{ uri: imagePath } :
												require(`../../../assets/add-user.png`)
										}
									/>
								</TouchableOpacity>
							</View>
						)}

					</View>

					{/** Settings */}
					<View style={styles.actions_icons}>
						<View style={styles.icon_edit}>
							{!isEditMode ? (
								<ButtonSettings
									type="warning"
									onPress={() => activeEditMode()}
								>
									Editar
								</ButtonSettings>
							) : (<>
								<ButtonSettings
									type="success"
									onPress={() => handleSubmit()}
								>
									Salvar
								</ButtonSettings>
							</>)}
						</View>

						<View style={styles.icon_edit}>
							{!isEditMode ? (
								<ButtonSettings
									type="danger"
									onPress={() => logout()}
								>
									Sair
								</ButtonSettings>
							) : (
								<ButtonSettings
									type="danger"
									onPress={() => setEditMode(false)}
								>
									Cancelar
								</ButtonSettings>
							)}
						</View>
					</View>

					{/** User's Name and Profession */}
					<View style={styles.wrapper_user}>
						{isEditMode ? (
							<>
								<Field
									component={InputBase}
									name="name"
									placeholder={user.name}
									style={styles.profile_name}
								/>
								<Field
									component={InputBase}
									name="profession"
									placeholder={user.profession}
									style={styles.profile_profession}
								/>
							</>
						) : (
							user.name && (<>
								<TextBase style={styles.profile_name}>
									{user.name}
								</TextBase>
								<TextBase style={styles.profile_profession}>
									{user.profession}
								</TextBase>
							</>)
						)}
					</View>

					{/** User's Mood */}
					<View style={styles.wrapper_status}>
						<View style={styles.status}>
							{isEditMode ? (<>
								<View style={styles.flexbox}>
									<TextBase style={styles.status_title}>Hoje estou me sentindo:</TextBase>
									<Field
										component={InputBase}
										name="status"
										placeholder={user.mood.description}
										style={styles.mood_status}
									/>
								</View>
								<View style={styles.mood}>
									<TouchableOpacity
										onPress={() => {
											navigation.navigate('EmojiSearch')
										}}
									>
										<TextBase
											style={styles.mood_emoticon_edit}
										>
											{user.mood.emoji_hex ?
												String.fromCodePoint(user.mood.emoji_hex)
												: ''
											}
										</TextBase>
									</TouchableOpacity>
								</View>
							</>
							) : (
								user.name && (<>
									<View style={styles.flexbox}>
										<TextBase style={styles.status_title}>Hoje estou me sentindo:</TextBase>
										<TextBase style={styles.mood_status}>
											{user.mood.description}
										</TextBase>
									</View>
									<View style={styles.mood}>
										<TextBase style={styles.mood_emoticon}>
											{user.mood.emoji_hex ?
												String.fromCodePoint(user.mood.emoji_hex)
												: ''}
										</TextBase>
									</View>
								</>)
							)}
						</View>
					</View>
				</>)}
			</Formik>

			{isSend &&
				<TouchableOpacity
					style={styles.alert_container}
					onPress={() => { navigation.navigate('Diary') }}
				>
					<AlertBase type="success">
						{`Publicado com sucesso. \nClique aqui, para ver seus diários.`}
					</AlertBase>
				</TouchableOpacity>
			}
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