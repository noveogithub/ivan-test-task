import { createSelector } from "reselect"
import { selectActiveFilters } from "selectors/filters"
import {
  ALL_LABEL,
  CONTRACT_TYPE,
  GROUP_BY,
  SEARCH_STRING,
  START_DATE
} from "constants/filters"
import { ALL_OPTION } from "constants/jobs"
import { jobFuzzyMatch } from "helpers/jobs"

export const selectCurrentOrganization = ({ jobs }) =>
  jobs.data.organization || ""

export const selectJobs = ({ jobs }) => jobs.data
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
      return !searchStringFilter || jobFuzzyMatch(job, searchStringFilter)
    })
  }
)

export const selectGroupedFilteredJobs = createSelector(
  [selectFilteredJobs, selectActiveFilters],
  (jobs, filters) => {
    const groupByFilter = filters[GROUP_BY]
    if (!groupByFilter) {
      return { [ALL_LABEL]: jobs }
    }
    return jobs.reduce((acc, job) => {
      const filterValue = job[groupByFilter] || ""
      if (!filterValue) {
        return acc
      }
      acc[filterValue] = acc[filterValue] || []
      acc[filterValue].push(job)
      return acc
    }, {})
  }
)
