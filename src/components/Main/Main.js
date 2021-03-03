import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

const Main = ({ 
	state, 
	user, 
	navigation 
}) => {
	
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Diary')}
				>
					<Image
						source={require(`../../../assets/Diary.png`)}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('Forum')}
				>
					<Image
						source={require(`../../../assets/Message.png`)}
					/>
				</TouchableOpacity>

				<View
					onTouchEnd={() => navigation.navigate('Profile')}
					style={styles.wrapper}
				>
					<ImageBackground
						source={{ uri: user.profile_picture }}
						style={styles.profile}
						imageStyle={styles.image}
					>
					</ImageBackground>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate('Calculator')}
				>
					<Image
						source={require(`../../../assets/Calculator.png`)}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('Notification')}
				>
					<Image
						source={require(`../../../assets/Notification.png`)}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Main;