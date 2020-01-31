import { fork } from "redux-saga/effects"
import { jobsSagaWatcher } from "sagas/jobs"
import { filtersSagaWatcher } from "sagas/filters"

/**
 * Root saga watcher. Launches all saga watchers
 */
export function* rootSaga() {
  yield fork(jobsSagaWatcher)
  yield fork(filtersSagaWatcher)
}
