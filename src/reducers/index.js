import { combineReducers } from "redux"
import { jobsReducer } from "reducers/jobs"
import { filtersReducer } from "reducers/filters"

export const reducer = combineReducers({
  jobsReducer,
  filtersReducer
})

