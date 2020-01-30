import {
  STATUS_LOADING,
  STATUS_NOT_REQUESTED,
  STATUS_SUCCESS
} from "constants/status"
import { createReducer } from "reducers/createReducer"
import { REQUEST_JOBS, REQUEST_JOBS_SUCCESS } from "actions/jobs"

const initialState = {
  data: {
    jobs: [],
    organization: ""
  },
  error: {},
  status: STATUS_NOT_REQUESTED
}

export const jobsReducer = createReducer(initialState, {
  [REQUEST_JOBS]: state => ({ ...state, status: STATUS_LOADING }),
  [REQUEST_JOBS_SUCCESS]: (state, { data }) => ({
    ...state,
    data,
    status: STATUS_SUCCESS
  })
})
