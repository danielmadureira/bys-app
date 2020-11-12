import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';

const Main = () => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View>
					<Image 
						source={require(`../../../assets/Icon1.png`)}
					/>
				</View>
				<View>
					<Image 
						source={require(`../../../assets/Icon1.png`)}
					/>
				</View>

				<View style={styles.wrapper}>
					<ImageBackground
						source={require(`../../../assets/Profile-Example.jpg`)}
						style={styles.profile}
						imageStyle={styles.image}
					>
					</ImageBackground>
				</View>

				<View>
					<Image 
						source={require(`../../../assets/Icon1.png`)}
					/>
				</View>
				<View>
					<Image 
						source={require(`../../../assets/Icon1.png`)}
					/>
				</View>
			</View>
		</View>
	)
}

export default Main;