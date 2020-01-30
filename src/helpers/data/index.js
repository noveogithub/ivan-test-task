import { camelCase } from "lodash/string"

export const normalizeArray = data =>
  data.reduce(
    (acc, item) => {
      acc.ids.push(item.id)
      acc.data[item.id] = item
      return acc
    },
    { data: {}, ids: [] }
  )

/**
 * converts object props to camelCase
 * @param { object } data
 * @returns { object }
 */
export const objectCamelizer = data =>
  Object.entries(data).reduce((acc, [key, value]) => {
    acc[camelCase(key)] = value
    return acc
  }, {})
