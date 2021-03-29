import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AlertBase, BackBase, TitleHeader } from '../../../components';
import BodyWriteDiary from './BodyWriteDiary'
import { styles } from './styles'
import { actions } from '../../../store/diary';

const WriteDiary = ({ navigation }) => {
	const { isSend } = useSelector(state => state.diary)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isSend) {
			setTimeout(() => {
				dispatch(actions.isSend(false))
			}, 2500);
		}
	}, [isSend])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Meu diário"
					subtitle="Tudo sobre o seu dia"
				/>
				<BackBase navigation={navigation} />
			</View>

			{isSend &&
				<AlertBase type="success">
					Publicado com sucesso.
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