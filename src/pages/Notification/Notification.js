import React from 'react';
import {
	View
} from 'react-native';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { TextBase } from '../../components';
import ButtonBase from '../../components/base/ButtonBase';

import { styles } from './styles'

const Notification = ({ navigation, type }) => {
	return (
		<ScrollView>
			{type !== 'water' && (
				<TextInput
					style={styles({}).input}
					placeholder="Nome do medicamento"
				/>
			)}

			<View style={styles({}).weekends}>
				<TextBase>Dias do alerta:</TextBase>
			</View>
			
			<View style={styles({}).days}>
				{DAYS.map(v => {
					return (
					<TouchableHighlight
						containerStyle={styles({
							color: v.selected && '#AFD47B'
						}).day}
					>
						<TextBase>{v.day}</TextBase>
					</TouchableHighlight>
					)
				})}
			</View>

			<TextInput
				style={styles({}).input}
				placeholder="Horário do alerta"
			/>

			<View style={styles({}).wrapper}>
				<View style={styles({}).wrapper_button}>
					<ButtonBase
						title="Salvar alerta"
						background="#EAEBCF"
						color="#000"
						radius={15}
					/>
				</View>
			</View>
			
		</ScrollView>
	);
};


const DAYS = [
	{ day: 'Dom.', selected: false }, 
	{ day: 'Seg.', selected: true }, 
	{ day: 'Ter.', selected: true }, 
	{ day: 'Qua', selected: false },
	{ day: 'Qui.', selected: false }, 
	{ day: 'Sex.', selected: true }, 
	{ day: 'Sáb', selected: false }
];

export default Notification;