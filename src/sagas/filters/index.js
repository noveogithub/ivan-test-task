import { takeLatest, put, all, debounce } from "redux-saga/effects"
import { CHANGE_FILTER, applyFilters } from "actions/filters"
import { DEFAULT_DEBOUNCE, SEARCH_STRING } from "constants/filters"

const isSeacrhFilter = ({ type, filter }) =>
  type === CHANGE_FILTER && filter === SEARCH_STRING

const isCommonFilter = ({ type, filter }) =>
  type === CHANGE_FILTER && filter !== SEARCH_STRING

function* changeFilterWorker() {
  yield put(applyFilters())
}

function* debouncedChangeFilterWorker() {
  yield put(applyFilters())
}

export function* filtersSagaWatcher() {
  yield all([
    yield takeLatest(action => isCommonFilter(action), changeFilterWorker),
    yield debounce(
      DEFAULT_DEBOUNCE,
      isSeacrhFilter,
      debouncedChangeFilterWorker
    )
  ])
}
