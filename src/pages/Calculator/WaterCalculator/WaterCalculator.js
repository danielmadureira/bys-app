import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TitleHeader } from '../../../components';

import { styles } from './styles'


const WaterCalculator = () => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Ingestão de água"
					subtitle="Na medida certa"
				/>
			</View>
		</ScrollView>
	);
};

export default WaterCalculator;