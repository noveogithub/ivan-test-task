const PREFIX = "filters"

export const APPLY_FILTERS = `${PREFIX}/APPLY_FILTERS`
export const applyFilters = () => ({
  type: APPLY_FILTERS
})

export const CHANGE_FILTER = `${PREFIX}/CHANGE_FILTER`
export const changeFilter = ({ filter, value }) => ({
  type: CHANGE_FILTER,
  filter,
  value
})

export const RESET_FILTERS = `${PREFIX}/RESET_FILTERS`
export const resetFilters = () => ({
  type: RESET_FILTERS
})
