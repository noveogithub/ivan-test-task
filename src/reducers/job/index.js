import {
  STATUS_LOADING,
  STATUS_NOT_REQUESTED,
  STATUS_SUCCESS
} from "constants/status"
import { createReducer } from "reducers/createReducer"
import { REQUEST_JOB, REQUEST_JOB_SUCCESS } from "actions/job"

const initialState = {
  data: {},
  error: {},
  status: STATUS_NOT_REQUESTED
}

export const jobsReducer = createReducer(initialState, {
  [REQUEST_JOB]: state => ({ ...state, status: STATUS_LOADING }),
  [REQUEST_JOB_SUCCESS]: (state, { data }) => ({
    data,
    status: STATUS_SUCCESS
  })
})
