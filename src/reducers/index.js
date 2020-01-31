import { combineReducers } from "redux"
import { jobReducer as job } from "reducers/job"
import { jobsReducer as jobs } from "reducers/jobs"
import { filtersReducer as filters } from "reducers/filters"

export const reducer = combineReducers({
  job,
  jobs,
  filters
})
