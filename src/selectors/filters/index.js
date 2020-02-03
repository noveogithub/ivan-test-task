import { SEARCH_STRING } from "constants/filters"

export const selectCurrentFilters = ({ filters }) => filters.current || {}
export const selectCurrentSearch = ({ filters }) =>
  filters.active[SEARCH_STRING] || ""
export const selectActiveFilters = ({ filters }) => filters.active || {}
