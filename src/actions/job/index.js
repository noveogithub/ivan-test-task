const PREFIX = "job"

export const REQUEST_JOB = `${PREFIX}/REQUEST_JOB`
export const requestJob = id => ({
  type: REQUEST_JOB,
  id
})

export const REQUEST_JOB_SUCCESS = `${PREFIX}/REQUEST_JOB_SUCCESS`
export const requestJobSuccess = data => ({
  type: REQUEST_JOB_SUCCESS,
  data
})

export const REQUEST_JOB_ERROR = `${PREFIX}/REQUEST_JOB_ERROR`
export const requestJobError = error => ({
  type: REQUEST_JOB_ERROR,
  error
})