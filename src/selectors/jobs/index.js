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
export const selectJobsStatus = ({ jobs }) => jobs.status
export const selectJobsCollection = ({ jobs }) => Object.values(jobs.data)

/**
 * selects unique contract types (prepared for usage as option list) from jobs collection
 * Set is used to get unique values
 */
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

/**
 * selects filtered by active filters jobs
 * if there's search string, added highlight prop to job (for mathes highlighting)
 */
export const selectFilteredPreparedJobs = createSelector(
  [selectJobsCollection, selectActiveFilters],
  (jobs, filters) => {
    const contractTypeFilter = filters[CONTRACT_TYPE]
    const startDateFilter = filters[START_DATE]
    const searchString = filters[SEARCH_STRING]
    return jobs.reduce((acc, job) => {
      if (
        job.publishedAt < startDateFilter ||
        (contractTypeFilter && job.contractType !== contractTypeFilter) ||
        (searchString && !jobFuzzyMatch(job, searchString))
      ) {
        return acc
      }
      acc.push(searchString ? { ...job, highlight: searchString } : job)
      return acc
    }, [])
  }
)

/**
 * Selects prepared filtered jobs grouped by `groupBy` filter value
 * @return {{ [groupName1]: [...jobs], [groupName2]: [...jobs], ... }}
 * @note if groupBy filter is not set, returns {[ALL_LABEL]: allJobs}
 */
export const selectGroupedPreparedJobs = createSelector(
  [selectFilteredPreparedJobs, selectActiveFilters],
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
