import React from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { TextBase } from '../..';

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
					<TextBase 
						numberOfLines={2}
						key={item.id}
						style={styles(props).title}
					>
						{item.title}
					</TextBase>

					<TextBase 
						numberOfLines={2}
						style={styles(props).subtitle}
					>
						{item.headline}
					</TextBase>
				</View>
			</TouchableWithoutFeedback >
		</ImageBackground>
	)
}

export default ImageCard;