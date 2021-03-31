import { NotificationAdapter } from "../../adapter/NotificationAdapter";

/**
 * Class WaterIngestionAlertService
 */
class WaterIngestionAlertService {

  /**
   * WaterIngestionAlertService constructor
   */
  constructor() {
    this.ML_PER_KILO = 35;
    this.GLASS_SIZE_IN_ML = 250;
    this.DAY_START = new Date();
    this.DAY_START.setHours(8, 0, 0, 0);
    this.DAY_END = new Date();
    this.DAY_END.setHours(22, 0, 0, 0);
    this.SECONDS_IN_A_DAY = (this.DAY_END - this.DAY_START) / 1e3;

    this.notificationAdapter = new NotificationAdapter();
  }

  /**
   * Registers water ingestion alerts' notifications.
   *
   * @param {Number} weight
   * @return {Promise<void>}
   */
  async register(weight) {
    const title = 'Beber água!';
    const text = `Beba pelo menos ${this.GLASS_SIZE_IN_ML}ml de água agora.`

    const portionInterval = this._getPortionIntervalInSec(weight);

    return this._registerNotifications(title, text, portionInterval);
  }

  /**
   * Register all water ingestion notifications.
   *
   * @param {String} title
   * @param {String} text
   * @param {Number} portionInterval
   * @return {Promise<String[]>}
   * @private
   */
  async _registerNotifications(title, text, portionInterval) {
    let promises = [ ];
    for (
      let timeInSec = 0;
      timeInSec <= this.SECONDS_IN_A_DAY;
      timeInSec += portionInterval
    ) {
      const day = this._getNewStartDate();
      day.setSeconds(day.getSeconds() + timeInSec);
      const timeString = `${day.getHours()}:${day.getMinutes()}`;

      const promise = this.notificationAdapter
        .createDailyNotification(title, text, timeString);

      promises.push(promise);
    }

    return Promise.all(promises);
  }

  /**
   * Calculates the interval
   * between portions.
   *
   * @param {Number} weight
   * @return {Number}
   * @private
   */
  _getPortionIntervalInSec(weight) {
    const mlPerDay = weight * this.ML_PER_KILO;
    const numberOfPortions = Math.round(mlPerDay / this.GLASS_SIZE_IN_ML);

    return Math.round(
      this.SECONDS_IN_A_DAY / numberOfPortions
    );
  }

  /**
   * Returns a new date instance
   * with DAY_START time.
   *
   * @return {Date}
   * @private
   */
  _getNewStartDate() {
    const day = new Date();
    day.setHours(
      this.DAY_START.getHours(),
      this.DAY_START.getMinutes(),
      this.DAY_START.getSeconds(),
      this.DAY_START.getMilliseconds()
    );

    return day;
  }

  /**
   * Cancels water ingestion alerts' notifications.
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

export { WaterIngestionAlertService };
