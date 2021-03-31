import { NotificationAdapter } from "../../adapter/NotificationAdapter";

/**
 * Class MedicationAlertService
 */
class MedicationAlertService {

  /**
   * MedicationAlertService constructor
   */
  constructor() {
    this.notificationAdapter = new NotificationAdapter();
  }

  /**
   * Register a medication alerts' notifications.
   *
   * @param {String} medicationName
   * @param {Number[]} days
   * @param {String[]} times
   * @return {String[]}
   */
  async register(medicationName, days, times) {
    const text = `Está na hora do seu medicamento: "${medicationName}".`;
    const promises = [ ];

    days.map(weekday => times.map(async time => {
      const promise = this.notificationAdapter
        .createWeeklyNotification(medicationName, text, weekday, time);

      promises.push(promise);
    }));

    return Promise.all(promises);
  }

  /**
   * Cancels a medication alerts' notifications.
   *
   * @param {String[]} identifiers
   * @return {Promise<void>}
   */
  async cancel(identifiers) {
    return Promise.all(
      identifiers.map(this.notificationAdapter.cancelNotification)
    );
  }

}

export { MedicationAlertService };
