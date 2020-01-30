import { takeLatest, call, put } from "redux-saga/effects"
import {
  REQUEST_JOBS,
  requestJobsError,
  requestJobsSuccess
} from "actions/jobs"
import { JobsApiCaller } from "requests/jobs"
import { withCache } from "services/cache"

const requestJobsByOrganization = withCache(
  JobsApiCaller.getJobsByOrganizationReference,
  true
)

function* requestJobsWorker({ organizationRef = "" }) {
  try {
    const { data } = yield call(requestJobsByOrganization, organizationRef)
    yield put(requestJobsSuccess(data.jobs || []))
  } catch (error) {
    yield put(requestJobsError(error.message))
  }
}

export function* jobsSagaWatcher() {
  yield takeLatest(REQUEST_JOBS, requestJobsWorker)
}
