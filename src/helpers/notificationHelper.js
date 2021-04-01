import { WEEK } from "../enums/Week"

/**
 * Convert and return just 
 * the number of week
 * 
 * @param {array} week 
 * @returns {array}
 */
const convertWeek = (
  week
) => {
  let days = []

  week.map((day) => {
    if (day.selected) {
      days.push(day.id)
    }
  })

  return days
}

/**
 * Name of days 
 * of week
 */
const daysInString = [
  WEEK.NAME.SUNDAY,
  WEEK.NAME.MONDAY,
  WEEK.NAME.TUESDAY,
  WEEK.NAME.WEDNESDAY,
  WEEK.NAME.THURSDAY,
  WEEK.NAME.FRIDAY,
  WEEK.NAME.SATURDAY
]

/**
 * Transform numbers of day
 * of week into name, 
 * and returns string
 * 
 * @param {array} days
 * @returns {string}
 */
const convertDaysToString = (days) => {
  let daysName = []
  days.map(v => {
    daysName.push(daysInString[v - 1])
  })
  return daysName.join('; ')
}

/**
 * Transform array in string
 * 
 * @param {array} hours 
 * @returns {string}
 */
const convertHoursToString = (hours) => {
  return hours.join('/')
}

export const NotificationHelper = {
  convertWeek,
  convertDaysToString,
  convertHoursToString
}