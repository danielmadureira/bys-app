import React from 'react';
import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const ImageCard = (props) => {
	const { item, onPress } = props;
	return (
		<ImageBackground
			source={
				item.picture ?
				{ uri: item.picture } :
				''
			}
			style={styles(props).container}
			imageStyle={styles(props).image}
		>
			<TouchableWithoutFeedback 
				onPress={onPress}
			>
				<View style={styles(props).wrapper_text}>
					<Text 
						numberOfLines={2}
						key={item.id}
						style={styles(props).title}
					>
						{item.title}
					</Text>

					<Text 
						numberOfLines={2}
						style={styles(props).subtitle}
					>
						{item.headline}
					</Text>
				</View>
			</TouchableWithoutFeedback >
		</ImageBackground>
	)
}

export default ImageCard;