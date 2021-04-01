import * as Notifications from 'expo-notifications';

/**
 * Class NotificationAdapter
 */
class NotificationAdapter {

  /**
   * Schedules a notification that
   * repeats weekly.
   *
   * @param {String} title
   * @param {String} text
   * @param {Number} weekday
   * @param {String} time
   * @return {Promise<*>}
   */
  async createWeeklyNotification(title, text, weekday, time) {
    const [hour, minute] = this._parseTime(time);
    const content = { title, body: text };
    const trigger = { weekday, hour, minute, repeats: true };

    return this._scheduleNotification(content, trigger);
  }

  /**
   * Schedules a notification that
   * repeats daily.
   *
   * @param {String} title
   * @param {String} text
   * @param {String} time
   * @return {Promise<*>}
   */
  async createDailyNotification(title, text, time) {
    const [hour, minute] = this._parseTime(time);
    const content = { title, body: text };
    const trigger = { hour, minute, repeats: true };

    return this._scheduleNotification(content, trigger);
  }

  /**
   * Cancels a scheduled notification.
   *
   * @param {String[]} identifier
   * @return {Promise<void>}
   */
  async cancelNotification(identifier) {
    return Notifications.cancelScheduledNotificationAsync(identifier);
  }

  /**
   * Schedules a notification.
   *
   * @param {Object} content
   * @param {Object} trigger
   * @return {Promise<string>} - The notification identifier.
   * @private
   */
  async _scheduleNotification(content, trigger) {
    this._registerNotificationHandler();

    return Notifications.scheduleNotificationAsync({
      content,
      trigger
    });
  }

  /**
   * Registers a notification handler.
   *
   * @return {Promise<void>}
   * @private
   */
  async _registerNotificationHandler() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        priority: Notifications.AndroidNotificationPriority.HIGH
      })
    });
  }

  /**
   * Parses a string time to an array
   * with the hour and minutes.
   *
   * @param {String} time
   * @return {*}
   * @private
   */
  _parseTime(time) {
    return time.split(':').map(str => parseInt(str, 10));
  }

}

export { NotificationAdapter };
