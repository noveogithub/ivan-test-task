/**
 * returns Date object with given offset
 * sets time to 00:00:00
 * @param offset number of days offset (can be negative)
 * @returns {Date}
 */
export const dateOffset = offset => {
  const dateObject = new Date()
  dateObject.setDate(dateObject.getDate() + offset)
  dateObject.setHours(0, 0, 0, 0)
  return dateObject
}
