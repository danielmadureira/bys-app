import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
	ImageBackground,
	Text,
	View
} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { BackBase, TextCard, TitleHeader } from '../../components'
import BodyWriteDiary from '../Diary/WriteDiary/BodyWriteDiary'

import DefaultProfile from '../../../assets/default-user.png'
import { styles } from './styles'
import InputBase from '../../components/base/InputBase'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'

const ProfileSchema = Yup.object().shape({
	status: Yup
		.string()
})

const Profile = ({ navigation }) => {
	
  const user = useSelector(state => state.user)
	const [isUpdateMode, setUpdateMode] = useState(true)

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
						blurRadius={1.5}
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

				{/** User's Name and Profession */}
				<View style={styles.wrapper}>
					<Text style={styles.profile_name}>
						{user.name}
					</Text>
					<Text style={styles.profile_profession}>
						{user.profession}
					</Text>
				</View>

				{/** User's Mood */}
				<View style={styles.wrapper_status}>
					<View style={styles.status}>
						<Text style={styles.status_title}>Hoje estou me sentindo:</Text>
						{isUpdateMode ? (
							<Field
								component={InputBase}
								name="status"
								placeholder="Abençoada"
								style={styles.status_title}
							/>
						) : (
							<Text style={styles.status_title}>Abençoada</Text>
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
						<Text style={styles.title}>Meu diário</Text>
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