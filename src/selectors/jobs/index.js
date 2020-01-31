import { createSelector } from "reselect"
import { selectActiveFilters } from "selectors/filters"
import { CONTRACT_TYPE, SEARCH_STRING, START_DATE } from "constants/filters"
import { ALL_OPTION } from "constants/jobs"
import { jobFuzzyMatch } from "helpers/jobs"

export const selectCurrentOrganization = ({ jobs }) =>
  jobs.data.organization || ""

export const selectJobsCollection = ({ jobs }) => Object.values(jobs.data)
export const selectJobsStatus = ({ jobs }) => jobs.status

export const selectContractTypesOptionList = createSelector(
  [selectJobsCollection],
  jobs => {
    const uniqueContractTypes = Array.from(
      jobs.reduce(
        (acc, { contractType }) => (contractType ? acc.add(contractType) : acc),
        new Set()
      )
    )
    return [
      ALL_OPTION,
      ...uniqueContractTypes.map(contract => ({
        label: contract,
        value: contract
      }))
    ]
  }
)

export const selectFilteredJobs = createSelector(
  [selectJobsCollection, selectActiveFilters],
  (jobs, filters) => {
    const contractTypeFilter = filters[CONTRACT_TYPE]
    const startDateFilter = filters[START_DATE]
    const searchStringFilter = filters[SEARCH_STRING]
    return jobs.filter(job => {
      if (
        (contractTypeFilter && job.contractType !== contractTypeFilter) ||
        job.publishedAt < startDateFilter
      ) {
        return false
      }
      return jobFuzzyMatch(job, searchStringFilter)
    })
  }
)
