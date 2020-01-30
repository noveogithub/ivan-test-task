import { combineReducers } from "redux"
import { jobsReducer as jobs } from "reducers/jobs"
import { filtersReducer as filters } from "reducers/filters"

export const reducer = combineReducers({
  jobs,
  filters
})
