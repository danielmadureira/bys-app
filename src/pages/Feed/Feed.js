import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonSettings, ImageCard, LoaderBase, TitleHeader } from '../../components';

import { styles } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/feed'

const Feed = ({ navigation }) => {
	const { news, isLoading } = useSelector(state => state.feed)
	const dispatch = useDispatch()

	const fetchMore = () => {
		if (news.current_page < news.last_page) {
			dispatch(actions.getAllFeed(
				news.current_page + 1
			))
		}
	}

	useEffect(() => {
		if (isLoading) {
			dispatch(actions.getAllFeed())
		}
	}, [isLoading])

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Feed"
					subtitle="Veja as últimas novidades"
				/>
			</View>
			<SafeAreaView style={styles.safearea}>
				{!isLoading ? (<>
					<SectionList
						contentContainerStyle={{ paddingBottom: 60 }}
						stickySectionHeadersEnabled={false}
						sections={
							[{ data: news.data }]
						}
						ListFooterComponent={
							(news.current_page < news.last_page) && (
								<View style={styles.button}>
									<ButtonSettings
										large
										type="success"
										onPress={() => fetchMore()}
									>
										Carregar mais
									</ButtonSettings>
								</View>
							)
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
							</View>
						}}
					/>
				</>) : (
					<LoaderBase />
				)}
			</SafeAreaView>
		</SafeAreaView>
	);
};


export default Feed;