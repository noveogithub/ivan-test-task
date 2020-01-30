import { STATUS_NOT_REQUESTED } from "constants/status"
import { createReducer } from "reducers/createReducer"

const initialState = {
  data: [],
  error: {},
  status: STATUS_NOT_REQUESTED
}

export const jobsReducer = createReducer(initialState, {})
