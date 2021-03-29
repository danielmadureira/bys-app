import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/diary'

import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {
	BackBase,
	LoaderBase,
	MessageBase,
	TitleHeader
} from '../../components';
import ButtonBase from '../../components/base/ButtonBase'
import { styles } from './styles'

const Diary = ({ navigation }) => {
	const { allTexts, isLoading } = useSelector(state => state.diary)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(actions.getAllDiary())
	}, [])

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.wrapper}>
				<StatusBar style="light" backgroundColor="#000" />
				<View style={styles.container_header}>
					<TitleHeader
						title="Todos os meus dias"
						subtitle="Esta é sua história"
					/>
					<BackBase navigation={navigation} />
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
					</View>
				)}
			</ScrollView>
		</View>
	);
};

export default Diary;