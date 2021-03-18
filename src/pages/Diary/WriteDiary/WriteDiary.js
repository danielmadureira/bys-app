import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ImageBackground,
	Text,
	View
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
import ButtonBase from '../../../components/base/ButtonBase';
import BodyWriteDiary from './BodyWriteDiary'
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
				<BackBase navigation={navigation} />
			</View>

			<BodyWriteDiary 
				numberOfLines={15}
				btnStyle={styles.wrapper_button}
				containerStyle={styles.message_container}
			/>

		</ScrollView>
	);
};

export default WriteDiary;