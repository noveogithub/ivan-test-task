import { camelCase } from "lodash/string"

/**
 * helper for normalizing collection
 * @param {array} data collection
 * @returns {{ data, ids }}
 * @example
 * in [{ id: 'id1', ... }, { id: 'id2', ... }]
 * out { data: { id1: { ... }, id2: { ... } }, ids: [id1, id2] }
 */
export const normalizeArray = data =>
  data.reduce(
    (acc, item) => {
      acc.ids.push(item.id)
      acc.data[item.id] = item
      return acc
    },
    { data: {}, ids: [] }
  )

console.log("test pre commit")
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
