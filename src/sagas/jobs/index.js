import { takeLatest, call, put, all, select } from "redux-saga/effects"
import { selectCurrentOrganization } from "selectors/jobs"
import {
  REQUEST_JOBS,
  REQUEST_JOBS_IF_NEED,
  requestJobs,
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
    const {
      data: { jobs }
    } = yield call(requestJobsByOrganization, organizationRef)
    yield put(requestJobsSuccess({ jobs, organization: organizationRef }))
  } catch (error) {
    yield put(requestJobsError(error.message))
  }
}

function* requestJobsIfNeedWorker({ organizationRef = "" }) {
  const lastRequestedOrganization = yield select(selectCurrentOrganization)
  if (organizationRef !== lastRequestedOrganization) {
    yield put(requestJobs({ organizationRef }))
  }
}

export function* jobsSagaWatcher() {
  yield all([
    yield takeLatest(REQUEST_JOBS, requestJobsWorker),
    yield takeLatest(REQUEST_JOBS_IF_NEED, requestJobsIfNeedWorker)
  ])
}
