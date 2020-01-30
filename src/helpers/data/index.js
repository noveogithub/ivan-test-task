export const normalizeArray = data =>
  data.reduce(
    (acc, item) => {
      acc.ids.push(item.id)
      acc.data[item.id] = item
      return acc
    },
    { data: {}, ids: [] }
  )
