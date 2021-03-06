import { takeLatest, put, select, race, take } from "redux-saga/effects"
import { REQUEST_JOB, requestJobError, requestJobSuccess } from "actions/job"
import { selectJobs } from "selectors/jobs"
import {
  REQUEST_JOBS_SUCCESS,
  REQUEST_JOBS_ERROR,
  requestJobs
} from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"

/**
 * request job worker. If there's no jobs in store, triggers get jobs action and waits for result
 * @param id
 */
function* requestJobWorker({ id }) {
  const jobs = yield select(selectJobs)
  if (jobs[id]) {
    yield put(requestJobSuccess(jobs[id]))
    return
  }
  yield put(requestJobs({ organization: TEST_ORGANIZATION_REF }))
  const { data: { data } = {} } = yield race({
    data: take(REQUEST_JOBS_SUCCESS),
    cancel: take(REQUEST_JOBS_ERROR)
  })
  if (data[id]) {
    yield put(requestJobSuccess(data[id]))
    return
  }
  yield put(requestJobError(`there's no such job`))
}

export function* jobSagaWatcher() {
  yield takeLatest(REQUEST_JOB, requestJobWorker)
}
