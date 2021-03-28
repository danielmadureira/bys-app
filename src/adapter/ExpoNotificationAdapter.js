import * as Notifications from 'expo-notifications'

/** Expo Notifications */
class ExpoNotificationAdapter {

  /**
   * Create a schedule 
   * for notification
   *  
   * @param {object} content 
   * @param {object} schedule
   */
  async addSchedule(content, schedule) {
    await Notifications.scheduleNotificationAsync({
      content: content,
      trigger: schedule
    })
  }


  async cancelSchedule(identifier) {
    await Notifications.cancelScheduledNotificationAsync(identifier)
  }

  /**
   * Create a channel 
   * for notification
   * 
   * @param {string} channelId 
   * @param {string} name 
   */
  createChannel(channelId, name) {
    Notifications.setNotificationChannelAsync(channelId, {
      name: name,
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250]
    })
  }

  /**
   * Get token when user's 
   * permission is approved
   * 
   * @returns {string}
   */
  async getToken() {
    const {
      status: existingStatus
    } = await Notifications.getPermissionsAsync()

    if (existingStatus !== 'granted') {
      const {
        status
      } = await Notifications.requestPermissionsAsync()

      if (status !== 'granted') {
        console.log('permission fail')
        return
      }
    }

    return (await Notifications.getExpoPushTokenAsync()).data
  }

}

export { ExpoNotificationAdapter }