import { fork } from "redux-saga/effects"
import { jobsSagaWatcher } from "sagas/jobs"

/**
 * Root saga watcher. Launches all saga watchers
 */
export function* rootSaga() {
  yield fork(jobsSagaWatcher)
}
