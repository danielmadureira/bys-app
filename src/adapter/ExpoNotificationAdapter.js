/**
 * Funções que ativam as notificações
 */
import * as Notifications from 'expo-notifications';

const schedule = async (titulo, dia, horas) => {
  let identificadores = []

  //horas.map(async (hora) => {
  console.log(identificadores)
  let identif = await Notifications.scheduleNotificationAsync({
    content: {
      title: `Lembre do medicamento ${titulo}!`,
      body: 'aaa'
    },
    trigger: {
      seconds: 2
    },
  });

  identificadores.push(identif)
  //})
  return identificadores
}

const deleteSchedule = async (identificadores) => {

  identificadores.map(async identif => {
    await Notifications.cancelScheduledNotificationAsync(identif)
  })

}


const StepOne = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  })
}

export const ExpoNotificationAdapter = {
  StepOne,
  schedule,
  deleteSchedule
}