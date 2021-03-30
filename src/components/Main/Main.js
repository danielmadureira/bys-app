import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import DefaultProfile from '../../../assets/default-user-light.png'
import { actions } from '../../store/forum'
import { useDispatch } from 'react-redux';

const Main = ({
	state,
	user,
	navigation
}) => {
	const dispatch = useDispatch()

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
					onPress={() => {
						dispatch(actions.isLoading(true))
						navigation.navigate('Forum')
					}}
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
						source={
							user.profile_picture ?
								{ uri: user.profile_picture } :
								DefaultProfile
						}
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