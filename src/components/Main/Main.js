import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import DefaultProfile from '../../../assets/default-user-light.png'
import { actions } from '../../store/diary'
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
						style={{ marginRight: 10 }}
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
						style={{ margin: 10 }}
						source={require(`../../../assets/Message.png`)}
					/>
				</TouchableOpacity>

				<View
					onTouchEnd={() => {
						if (state.index > 0) {
							navigation.navigate('Feed')
						} else {
							dispatch(actions.isSend(false))
							navigation.navigate('Profile')
						}
					}}
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
						style={{ margin: 10 }}
						source={require(`../../../assets/Calculator.png`)}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('Notification')}
				>
					<Image
						style={{ margin: 10 }}
						source={require(`../../../assets/Notification.png`)}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Main;