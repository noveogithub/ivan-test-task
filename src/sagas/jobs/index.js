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
import { normalizeArray } from "helpers/data"
import { prepareJobs } from "transformers"

const requestJobsByOrganization = withCache(
  JobsApiCaller.getJobsByOrganizationReference,
  true
)

function* requestJobsWorker({ organization = "" }) {
  try {
    const { data } = yield call(requestJobsByOrganization, organization)
    const preparedJobs = prepareJobs(data.jobs)
    const jobsData = {
      ...normalizeArray(preparedJobs),
      organization
    }
    yield put(requestJobsSuccess(jobsData))
  } catch (error) {
    yield put(requestJobsError(error.message))
  }
}

function* requestJobsIfNeedWorker({ organization = "" }) {
  const lastRequestedOrganization = yield select(selectCurrentOrganization)
  if (organization !== lastRequestedOrganization) {
    yield put(requestJobs({ organization }))
  }
}

export function* jobsSagaWatcher() {
  yield all([
    yield takeLatest(REQUEST_JOBS, requestJobsWorker),
    yield takeLatest(REQUEST_JOBS_IF_NEED, requestJobsIfNeedWorker)
  ])
}
