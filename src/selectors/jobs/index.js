export const selectCurrentOrganization = ({ jobs }) =>
  jobs.data.organization || ""

export const selectJobsCollection = ({ jobs }) => Object.values(jobs.data)
