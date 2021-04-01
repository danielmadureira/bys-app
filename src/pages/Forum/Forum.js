import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
	const [loading, setLoading] = useState(false)

	const fetchMore = () => {
		if (groups.current_page < groups.last_page) {
			dispatch(actions.getAllForumGroups(
				groups.current_page + 1
			))
		}
		setTimeout(() => {
			setLoading(false)
		}, 10);
	}

	useEffect(() => {
		if (isLoading) {
			if (!groups.current_page) {
				dispatch(actions.getAllForumGroups(1))
				return
			}

			if (groups.current_page === 1) {
				dispatch(actions.getAllForumGroups(1))
				return
			}
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
				<BackBase initial navigation={navigation} />
			</View>

			<SafeAreaView style={{ flex: 1, marginBottom: 100 }}>
				{!isLoading ? (
					<View>
						{groups.data.map((section, i) => {
							return (
								<View key={`${i}`} style={styles.wrapper}>
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