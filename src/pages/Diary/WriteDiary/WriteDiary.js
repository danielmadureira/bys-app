import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AlertBase, FeedBackBase, TitleHeader } from '../../../components';
import BodyWriteDiary from './BodyWriteDiary'
import { styles } from './styles'
import { actions } from '../../../store/diary';

const WriteDiary = (props) => {
	const { navigation } = props
	const { hasError } = useSelector(state => state.diary)
	const dispatch = useDispatch()

	useEffect(() => {
		if (hasError) {
			setTimeout(() => {
				dispatch(actions.hasError(null))
			}, 2500);
		}
	}, [hasError])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Meu diário"
					subtitle="Tudo sobre o seu dia"
				/>
				<FeedBackBase navigation={navigation} />
			</View>

			{hasError &&
				<AlertBase type="danger">
					{hasError}
				</AlertBase>
			}

			<BodyWriteDiary
				numberOfLines={15}
				btnStyle={styles.wrapper_button}
				containerStyle={styles.message_container}
			/>

		</ScrollView>
	);
};

export default WriteDiary;