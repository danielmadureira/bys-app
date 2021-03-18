import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	Text,
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { BackBase, TitleHeader } from '../../../components';
import { styles } from '../styles'
import { actions } from '../../../store/diary'


const DetailsDiary = ({ navigation, route }) => {
  const { id } = route.params
	const { item } = useSelector(state => state.diary)
	const dispatch = useDispatch()

  useEffect(() => {
		dispatch(actions.getDiary(id))
  }, [id])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title={item.title}
					subtitle="Tudo sobre o seu dia"
				/>
				<BackBase navigation={navigation} />
			</View>

      <View style={styles.wrapper_body}>
				<Text style={styles.body}>
					{item.text}
				</Text>
			</View>
		</ScrollView>
	);
};

export default DetailsDiary;