import { createReducer } from "reducers/createReducer"
import { WEEK_OFFSET } from "constants/date"
import { dateOffset } from "helpers/date"
import { APPLY_FILTERS, CHANGE_FILTER, RESET_FILTERS } from "actions/filters"
import { DEFAULT_JOBS_GROUP_BY } from "constants/jobs"

const initialFilters = {
  searchString: "",
  contractType: "",
  startDate: dateOffset(-WEEK_OFFSET),
  groupBy: DEFAULT_JOBS_GROUP_BY
}

const initialState = {
  current: initialFilters,
  active: initialFilters
}

export const filtersReducer = createReducer(initialState, {
  [CHANGE_FILTER]: (state, { filter, value }) => ({
    ...state,
    current: { ...state.current, [filter]: value }
  }),
  [APPLY_FILTERS]: state => ({
    ...state,
    active: state.current
  }),
  [RESET_FILTERS]: () => initialState
})
