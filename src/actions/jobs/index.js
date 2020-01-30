const PREFIX = "jobs"

export const REQUEST_JOBS = `${PREFIX}/REQUEST_JOBS`
export const requestJobs = ({ organizationRef }) => ({
  type: REQUEST_JOBS,
  organizationRef
})

export const REQUEST_JOBS_SUCCESS = `${PREFIX}/REQUEST_JOBS_SUCCESS`
export const requestJobsSuccess = data => ({
  type: REQUEST_JOBS_SUCCESS,
  data
})

export const REQUEST_JOBS_ERROR = `${PREFIX}/REQUEST_JOBS_ERROR`
export const requestJobsError = error => ({
  type: REQUEST_JOBS_ERROR,
  error
})
