import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View,
	SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/forum'
import {
	BackBase,
	ButtonSettings,
	LoaderBase,
	TitleHeader
} from '../../components';

import { styles } from './styles'
import ForumRoom from './Room';

const Forum = ({ navigation }) => {
	const { groups, isLoading } = useSelector(state => state.forum)
	const dispatch = useDispatch()

	const fetchMore = () => {
		if (groups.current_page < groups.last_page) {
			dispatch(actions.getAllForumGroups(
				groups.current_page + 1
			))
		}
	}

	useEffect(() => {
		if (isLoading) {
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
				{!isLoading ? (
					<View>
						{groups.data.map(section => {
							return (
								<View style={styles.wrapper}>
									<View style={styles.container_header}>
										<TitleHeader
											title={section.name}
											subtitle={section.description}
											top={1}
										/>
									</View>

									<ForumRoom
										room={section.id}
									/>
								</View>
							)
						})}

						{(groups.current_page < groups.last_page) && (
							<View style={styles.button}>
								<ButtonSettings
									large
									type="success"
									onPress={() => fetchMore()}
								>
									Carregar mais
							</ButtonSettings>
							</View>
						)}
					</View>
				) : (
					<LoaderBase />
				)}
			</SafeAreaView>
		</ScrollView>
	);
};

export default Forum;