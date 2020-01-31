import { createSelector } from "reselect"

export const selectCurrentOrganization = ({ jobs }) =>
  jobs.data.organization || ""

export const selectJobsCollection = ({ jobs }) => Object.values(jobs.data)

export const selectContractTypesOptionList = createSelector(
  [selectJobsCollection],
  jobs =>
    [
      ...jobs.reduce(
        (acc, { contractType }) => (contractType ? acc.add(contractType) : acc),
        new Set()
      )
    ].map(contractType => ({ label: contractType, value: contractType }))
)
