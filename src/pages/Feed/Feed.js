import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from "./styles";

const Feed = () => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<Text>
					Feed
				</Text>
			</View>
		</ScrollView>
	)
}

export default Feed;