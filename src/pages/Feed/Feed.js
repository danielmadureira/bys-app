import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
} from 'react-native';
import { ButtonSettings, ImageCard, LoaderBase, TitleHeader } from '../../components';

import { styles } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/feed'

const Feed = ({ navigation }) => {
	const { news, isLoading } = useSelector(state => state.feed)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	const fetchMore = () => {
		if (news.current_page < news.last_page) {
			dispatch(actions.getAllFeed(
				news.current_page + 1
			))
		}

		setTimeout(() => {
			setLoading(false)
		}, 10);
	}

	useEffect(() => {
		if (isLoading) {
			dispatch(actions.getAllFeed())
		}
	}, [isLoading])

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<SafeAreaView style={styles.safearea}>
				{!isLoading ? (<>
					<SectionList
						contentContainerStyle={{ paddingBottom: 60 }}
						stickySectionHeadersEnabled={false}
						sections={
							[{ data: news.data }]
						}
						ListHeaderComponent={
							<View style={styles.container_header}>
								<TitleHeader
									title="Feed"
									subtitle="Veja as últimas novidades"
								/>
							</View>
						}
						ListFooterComponent={
							(news.current_page < news.last_page) && (
								<View style={styles.button}>
									<ButtonSettings
										large
										loader={loading}
										type="success"
										onPress={() => {
											setLoading(true)
											fetchMore()
										}}
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