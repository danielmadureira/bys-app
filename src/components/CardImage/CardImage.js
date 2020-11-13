import React from 'react';
import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const CardImage = (props) => {
	const { item, smallSize } = props;
	return (
		<ImageBackground
			source={item.picture}
			style={styles(props).container}
			imageStyle={styles(props).image}
		>
			<TouchableWithoutFeedback 
				onPress={() => {
					alert('a')
				}}
			>
				<View style={styles(props).wrapper_text}>
					<Text 
						key={item.id}
						style={styles(props).title}
					>
						{item.title}
					</Text>

					<Text 
						style={styles(props).subtitle}
					>
						{item.subtitle}
					</Text>
				</View>
			</TouchableWithoutFeedback >
		</ImageBackground>
	)
}

export default CardImage;