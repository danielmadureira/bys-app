import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ImageBackground,
	Text,
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { BackBase, TextCard, TitleHeader } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';

import { styles } from './styles'

const Profile = ({ navigation }) => {
	
  const user = useSelector(state => state.user)

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
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
				>
				</ImageBackground>

				{/** User's Profile Picture */}
				<View style={styles.profile_image_wrapper}>
					<ImageBackground
						source={{ uri: user.profile_picture }}
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
					<Text style={styles.status_title}>Abençoada</Text>
				</View>
			</View>

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
					<View style={styles.message}>		
						<TextInput
							placeholder="Meu diário hoje, 27 de julho"
							style={styles.input}
						/>
						
						<TextInput
							placeholder="Você pode digitar qualquer coisa aqui."
							style={styles.input_area}
							multiline={true}
							numberOfLines={6}
						/>

						<View style={styles.wrapper_button}>
							<ButtonBase
								title="Salvar"
								background="#EAEBCF"
								color="#000"
								radius={15}
								onPress={() => navigation.navigate('WriteDiary')}
							/>
						</View>
					</View>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

export default Profile;