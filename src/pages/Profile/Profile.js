import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ImageBackground,
	Text,
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { BackBase, TextCard, TitleHeader } from '../../components';

import { styles } from './styles'


const Profile = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Perfil"
					subtitle="Vamos falar sobre você"
				/>
				<BackBase />
			</View>

			<View style={styles.wrapper}>
				<ImageBackground
					source={require(`../../../assets/profile_background.jpg`)}
					imageStyle={styles.image}
					style={styles.profile}
				>
				</ImageBackground>

				<View style={styles.profile_image_wrapper}>
					<ImageBackground
						source={require(`../../../assets/Profile-picture.png`)}
						imageStyle={styles.profile_image}
						style={styles.profile}
					>
					</ImageBackground>
				</View>
			</View>

			<View style={styles.wrapper}>
				<Text style={styles.profile_name}>Adriana M. Gonze</Text>
				<Text style={styles.profile_profession}>Chefe de enfermagem</Text>
			</View>

			<View style={styles.wrapper_status}>
				<View style={styles.status}>
					<Text style={styles.status_title}>Hoje estou me sentindo:</Text>
					<Text style={styles.status_title}>Abençoada</Text>
				</View>
			</View>

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
					</View>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

export default Profile;