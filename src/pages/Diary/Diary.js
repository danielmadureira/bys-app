import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
	View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/diary'

import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {
	BackBase,
	ButtonSettings,
	LoaderBase,
	MessageBase,
	TitleHeader,
	ButtonBase
} from '../../components';
import { styles } from './styles'

const Diary = ({ navigation }) => {
	const { allTexts, isLoading } = useSelector(state => state.diary)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading) {
			dispatch(actions.getAllDiary(1))
		}
	}, [isLoading])

	const fetchMore = () => {
		if (allTexts.current_page < allTexts.last_page) {
			dispatch(actions.getAllDiary(
				allTexts.current_page + 1
			))
		}
		setTimeout(() => {
			setLoading(false)
		}, 10);
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.wrapper}>
				<StatusBar style="light" backgroundColor="#000" />
				<View style={styles.container_header}>
					<TitleHeader
						title="Todos os meus dias"
						subtitle="Esta é sua história"
					/>
					<BackBase initial navigation={navigation} />
				</View>

				<View style={styles.wrapper_button}>
					<ButtonBase
						title="Escrever no diário"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => navigation.navigate('WriteDiary')}
					/>
				</View>
				{isLoading ? (
					<LoaderBase />
				) : (
					<View style={styles.messages}>
						{(() => {
							if (allTexts.data) {
								return allTexts.data.map((v, i) => {
									return (
										<TouchableWithoutFeedback
											key={v.id}
											onPress={() => {
												navigation.navigate('DetailsDiary', {
													id: v.id
												})
											}}
										>
											<MessageBase
												key={v.id}
												diary={v}
											/>
										</TouchableWithoutFeedback>
									)
								})
							}
						})()}

						{(allTexts.current_page < allTexts.last_page) && (
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
				)}
			</ScrollView>
		</View>
	);
};

export default Diary;