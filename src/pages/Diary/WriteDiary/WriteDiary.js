import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ImageBackground,
	Text,
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TitleHeader } from '../../../components';

import { styles } from './styles'


const WriteDiary = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Meu diário"
					subtitle="Tudo sobre o seu dia"
				/>
			</View>

			<View style={styles.message_container}>	
				<View style={styles.message}>		
					<TextInput
						placeholder="Meu diário hoje, 27 de julho"
						style={styles.input}
					/>
					
					<TextInput
						placeholder="Você pode digitar qualquer coisa aqui."
						style={styles.input_area}
						multiline={true}
						numberOfLines={15}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default WriteDiary;