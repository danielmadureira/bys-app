import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageCard, LoaderBase, TitleHeader } from '../../components';

import { styles } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/feed'
import { ActivityIndicator } from 'react-native';

const Feed = ({ navigation }) => {
	const { data, isLoading } = useSelector(state => state.feed)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading) {
			dispatch(actions.getAllFeed())
		}
	}, [isLoading])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Feed"
					subtitle="Veja as últimas novidades"
				/>
			</View>
			<SafeAreaView style={styles.safearea}>
				{!isLoading ? (
					<SectionList
						contentContainerStyle={styles.space}
						stickySectionHeadersEnabled={false}
						sections={
							[{ data: data }]
						}
						renderItem={({ item }) => {
							return <View
								key={item.id}
								style={styles.wrapper}
								onTouchEnd={() => {
									dispatch(actions.isLoadingDetails(true))

									navigation.navigate('DetailFeed', {
										itemId: item.id
									})
								}}
							>
								<ImageCard
									item={item}
								/>
							</View>;
						}}
					/>
				) : (
					<LoaderBase />
				)}
			</SafeAreaView>
		</ScrollView>
	);
};


export default Feed;