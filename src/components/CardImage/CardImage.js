import React from 'react';
import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const CardImage = (props) => {
	const { item } = props;
	return (
		<ImageBackground
			source={require(`../../../assets/Feed-Example.jpg`)}
			style={styles.container}
			imageStyle={styles.image}
			
		>
			<TouchableWithoutFeedback 
				onPress={() => {
					alert('a')
				}}
			>
				<View style={styles.wrapper_text}>
					<Text 
						key={item.id}
						style={styles.title}
					>
						{item.title}
					</Text>

					<Text 
						style={styles.subtitle}
					>
						{item.subtitle}
					</Text>
				</View>
			</TouchableWithoutFeedback >
		</ImageBackground>
	)
}

export default CardImage;