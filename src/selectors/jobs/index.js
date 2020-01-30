export const selectCurrentOrganization = ({ jobs }) =>
  jobs.data.organization || ""

export const selectJobs = ({ jobs }) => jobs.data.jobs || []
