import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	Image,
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextBase, TitleHeader } from '../../../components';

import { styles } from './styles'
import ImagemSVG from '../../../../assets/Feed-Example.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/feed'

const DetailFeed = ({ route, navigation }) => {
	const { itemId } = route.params;
	const { details } = useSelector(state => state.feed)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(actions.getFeedById(itemId))
	}, [itemId])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />	
			<View style={styles.container_header}>
				<TitleHeader
					title={details.title}
					subtitle={details.author}
				/>
				<BackBase navigation={navigation} />
			</View>

			<View style={styles.wrapper_picture}>
				<Image 
					borderRadius={20}
					style={styles.picture} 
					source={{ uri: details.picture }} 
				/>
				<TextBase style={styles.picture_title}>
					{details.picture_description}
				</TextBase>
			</View>

			<View style={styles.wrapper_body}>
				<TextBase style={styles.body}>
					{details.text}
				</TextBase>
			</View>
		</ScrollView>
	);
};

export default DetailFeed;