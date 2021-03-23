import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
	FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/forum'
import { 
	AlertBase, 
	BackBase, 
	TextBase, 
	TextCard, 
	TitleHeader 
} from '../../components';

import { styles } from './styles'

const Forum = ({ navigation }) => {
	const { groups, isLoading } = useSelector(state => state.forum)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if(isLoading) {
			dispatch(actions.getAllForumGroups())
		}
	}, [isLoading])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Conversa"
					subtitle="Compartilhe experiências"
				/>
				<BackBase navigation={navigation} />
			</View>

			<SafeAreaView style={{ flex: 1, marginBottom: 100 }}>
				{!isLoading && (
				<SectionList
					stickySectionHeadersEnabled={false}
					sections={groups}
					renderSectionHeader={({ section }) => (
						<>
							{<View style={styles.wrapper}>
								<View style={styles.container_header}>
									<TitleHeader
										title={section.title}
										subtitle={section.subtitle}
										top={1}
									/>
								</View>
								<FlatList
									horizontal
									ListEmptyComponent={
										<AlertBase type="warning">
											<TextBase>
												Este grupo não possui salas no momento.
											</TextBase>
										</AlertBase>
									}
									data={section.data}
									renderItem={({ item }) => {
										console.log(item, 'here')
										return (
											<View key={item.id} style={styles.wrapper_card}>
												<TextCard 
													smallSize 
													diary={item} 
													event={() => {
														dispatch(actions.isCommentLoading(true))
														navigation.navigate('ForumGroup', {
															title: section.title,
															subtitle: section.subtitle,
															id: item.id
														}
													)}} 
												/>
											</View>
										) 
									}}
									showsHorizontalScrollIndicator={false}
								/>
							</View>}
						</>
					)}
					renderItem={({ item, section }) => {
						return null;
					}}
				/>
				)}
			</SafeAreaView>
		</ScrollView>
	);
};

export default Forum;