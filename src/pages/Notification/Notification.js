import React, { useEffect, useState } from 'react';
import {
	View
} from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { TextBase, ButtonBase } from '../../components';
import { NotificationHelper } from '../../helpers/notificationHelper';
import { actions } from '../../store/notification'
import { v4 as uuidGenerator } from 'uuid'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/core';

const Notification = ({ medication }) => {
	const [name, setName] = useState('')
	const [days, setDays] = useState(NotificationHelper.daysOfWeek())
	const [hours, setHours] = useState([])
	const [error, setError] = useState('')
	const navigation = useNavigation()
	const dispatch = useDispatch()

	// Select a day and change status
	const chooseDay = (id) => {
		setDays((days) => {
			return days.map(day => {
				if (day.id === id) {
					day.selected = !day.selected
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
		if (!name) {
			setError('Você precisa inserir um nome para o alarme')
			return
		}

		let daysOfAlert = NotificationHelper.convertWeek(days)
		if (daysOfAlert.length <= 0) {
			setError('Você precisa selecionar os dias do alarme')
			return
		}

		if (hours.length <= 0) {
			setError('Adicione pelo menos um horário para o alarme')
			return
		}

		let content = {
			uuid: uuidGenerator(),
			title: name,
			days: daysOfAlert,
			hours: hours,
			identifiers: []
		}

		try {
			dispatch(actions.createMedicationAlert(content))
			navigation.navigate('AllMedicineNotification')
		} catch (error) {
			setError(
				'Houve um erro desconhecido ao tentar salvar as'
				+ ' informações deste alarme. Tente novamente.'
			)
		}
		alert(JSON.stringify(content))
	}

	const zeroFill = (integer, length = 2) => {
		return `${'0'.repeat(length)}${integer}`.substr(length * -1)
	}

	const toNumericString = (string) => {
		return string.replace(/[^0-9]/g, '')
	}

	const formatHours = (hourNumbers) => {
		hourNumbers = zeroFill(toNumericString(hourNumbers), 4)
		const textHours = Math.min(hourNumbers.substr(0, 2), 23)
		const textMinutes = Math.min(hourNumbers.substr(2, 2), 59)

		return `${zeroFill(textHours)}:${zeroFill(textMinutes)}`
	}

	useEffect(() => {
		setError('')
		setName('')
		setHours([`${(new Date()).getHours()}:00`])
		setDays((days) => {
			return days.map(day => {
				day.selected = false
				return day
			})
		})
	}, [medication])

	return (
		<View style={styles({}).container}>
			<ScrollView>
				{
					error ?
						<View style={styles({}).errorWrapper}>
							<TextBase style={styles({}).errorMessage}>{error}</TextBase>
						</View>
						: null
				}

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
								selectTextOnFocus
								onEndEditing={event => {
									const inputValue = event.nativeEvent?.text || null
									setHours((hours) => {
										return hours.map((item, index) => {
											if (i === index) {
												if (!inputValue) return null
												if (inputValue.match(/^(\d{2}):(\d{2})/, '$1:$2')) {
													return inputValue
												}
												return formatHours(toNumericString(inputValue))
											}
											return item
										})
									})
								}}
								onChangeText={(text) => {
									setHours((hours) => {
										return hours.map((item, index) => {
											if (i === index) {
												const textNumbers = toNumericString(text);
												if (textNumbers.length >= 4) {
													return formatHours(textNumbers)
												}
												return text
											}
											return item
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
		</View>
	);
};

export default Notification;
