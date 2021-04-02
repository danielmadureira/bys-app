import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { BackBase, LoaderBase, TextBase, TitleHeader } from '../../../components';
import { styles } from '../styles'
import { actions } from '../../../store/diary'


const DetailsDiary = ({ navigation, route }) => {
	const { id } = route.params
	const { item } = useSelector(state => state.diary)
	const [isLoading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		setLoading(true)
		dispatch(actions.getDiary(id))

		setTimeout(() => {
			setLoading(false)
		}, 500);
	}, [id])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			{isLoading ? (
				<View style={styles.loader}>
					<LoaderBase />
				</View>
			) : (<>
				<View style={styles.container_header}>
					<TitleHeader
						title={item.title}
						subtitle="Tudo sobre o seu dia"
					/>
					<BackBase navigation={navigation} />
				</View>

				<View style={styles.wrapper_body}>
					<TextBase style={styles.body}>
						{item.text}
					</TextBase>
				</View>
			</>)}
		</ScrollView>
	);
};

export default DetailsDiary;