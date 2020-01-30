import { createReducer } from "reducers/createReducer"
import { WEEK_OFFSET } from "constants/date"
import { dateOffset } from "helpers/date"

const initialState = {
  searchString: "",
  contractType: "",
  startDate: dateOffset(new Date(), -WEEK_OFFSET),
  groupBy: ""
}

export const filtersReducer = createReducer(initialState, {})
