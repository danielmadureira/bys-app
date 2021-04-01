import React, { useEffect, useState } from 'react';
import {
	View
} from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { TextBase, ButtonBase } from '../../components';
import { AlertTypes } from '../../enums/AlertTypes';
import { WEEK } from '../../enums/Week';
import { NotificationHelper } from '../../helpers/notificationHelper';
import { actions } from '../../store/notification'
import uuid from 'react-native-uuid'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/core';

const Notification = ({ medication }) => {
	const [name, setName] = useState('')
	const [days, setDays] = useState(DaysOfWeek)
	const [hours, setHours] = useState([])
	const navigation = useNavigation()
	const dispatch = useDispatch()

	// Select a day and change status
	const chooseDay = (id) => {
		setDays((days) => {
			return days.map(day => {
				if (day.id == id && day.selected) {
					day.selected = false
				} else if (day.id == id && !day.selected) {
					day.selected = true
				}
				return day
			})
		})
	}

	// Add an index to hours
	const addHour = () => {
		setHours((hours) => [...hours, ''])
	}

	// Remove an index of hours
	const removeHour = (index) => {
		setHours(hours.filter((item, i) => i !== index));
	}

	const createNotification = () => {
		let daysOfAlert = NotificationHelper.convertWeek(days)
		if (!medication.uuid) {
			let content = {
				uuid: uuid.v1(),
				title: name,
				days: daysOfAlert,
				hours: hours,
				identifiers: []
			}
			dispatch(actions.createMedicationAlert(content))
		}
		navigation.navigate('AllMedicineNotification')
	}

	useEffect(() => {
		if (medication.uuid) {
			setName(medication.title)
			setHours(medication.hours)

			setDays((days) => {
				return days.map(day => {
					if ((medication.days).includes(day.id)) {
						day.selected = true
					} else {
						day.selected = false
					}
					return day
				})
			})
		} else {
			setName('')
			setHours([])
			setDays((days) => {
				return days.map(day => {
					day.selected = false
					return day
				})
			})
		}

	}, [medication])

	return (
		<View style={styles({}).container}>
			<ScrollView>
				<TextInput
					style={styles({}).input}
					placeholder="Nome do medicamento"
					value={name}
					onChangeText={(text) => {
						setName(text)
					}}
				/>

				<View style={styles({}).days}>
					<TextBase>Dias do alerta:</TextBase>
				</View>

				{/** Days of week */}
				<View style={styles({}).days}>
					{days.map(v => {
						return (
							<TouchableWithoutFeedback
								key={v.id}
								containerStyle={styles({
									color: v.selected && '#AFD47B'
								}).day}
								onPress={() => chooseDay(v.id)}
							>
								<TextBase>{v.day}</TextBase>
							</TouchableWithoutFeedback>
						)
					})}
				</View>

				{/** List of hours */}
				{hours.length > 0 ?
					hours.map((hour, i) => {
						return (<View key={i} style={styles({}).hours_list}>
							<TextInput
								style={styles({}).hour}
								placeholder="Horário do alerta"
								value={hour}
								keyboardType="numeric"
								maxLength={5}
								onChangeText={(text) => {
									setHours((hours) => {
										return hours.map((item, index) => {
											return (i === index) ?
												text.replace(
													/^(\d{2})(\d{2})/, '$1:$2'
												)
												: item
										})
									});
								}}
							/>
							<View style={styles({}).remove_hour}>
								<ButtonBase
									title="Remover horário"
									background="#EAEBCF"
									color="#000"
									radius={15}
									onPress={() => removeHour(i)}
								/>
							</View>
						</View>)
					}) : <></>}

				<View style={styles({}).wrapper_button}>
					<ButtonBase
						title="Adicionar horário"
						background="#EAEBCF"
						color="#000"
						radius={15}
						onPress={() => {
							addHour()
						}}
					/>
				</View>

				<View style={styles({}).wrapper_button}>
					<ButtonBase
						title="Salvar alerta"
						radius={5}
						onPress={() => {
							createNotification()
						}}
					/>
				</View>
			</ScrollView>
		</View >
	);
};

const DaysOfWeek = [
	{ id: WEEK.NUMBER.SUNDAY, day: WEEK.NAME.SUNDAY, selected: false },
	{ id: WEEK.NUMBER.MONDAY, day: WEEK.NAME.MONDAY, selected: false },
	{ id: WEEK.NUMBER.TUESDAY, day: WEEK.NAME.TUESDAY, selected: false },
	{ id: WEEK.NUMBER.WEDNESDAY, day: WEEK.NAME.WEDNESDAY, selected: false },
	{ id: WEEK.NUMBER.THURSDAY, day: WEEK.NAME.THURSDAY, selected: false },
	{ id: WEEK.NUMBER.FRIDAY, day: WEEK.NAME.FRIDAY, selected: false },
	{ id: WEEK.NUMBER.SATURDAY, day: WEEK.NAME.SATURDAY, selected: false }
]

export default Notification;