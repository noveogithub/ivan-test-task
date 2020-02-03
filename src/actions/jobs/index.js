const PREFIX = "jobs"

export const REQUEST_JOBS = `${PREFIX}/REQUEST_JOBS`
export const requestJobs = ({ organization = "" }) => ({
  type: REQUEST_JOBS,
  organization
})

export const REQUEST_JOBS_SUCCESS = `${PREFIX}/REQUEST_JOBS_SUCCESS`
export const requestJobsSuccess = ({ data, ids, organization }) => ({
  type: REQUEST_JOBS_SUCCESS,
  data,
  ids,
  organization
})

export const REQUEST_JOBS_ERROR = `${PREFIX}/REQUEST_JOBS_ERROR`
export const requestJobsError = error => ({
  type: REQUEST_JOBS_ERROR,
  error
})

export const REQUEST_JOBS_IF_NEED = `${PREFIX}/REQUEST_JOBS_IF_NEED`
export const requestJobsIfNeed = ({ organization = "" }) => ({
  type: REQUEST_JOBS_IF_NEED,
  organization
})
