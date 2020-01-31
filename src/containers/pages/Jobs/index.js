import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestJobsIfNeed } from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import {
  selectContractTypesOptionList,
  selectGroupedFilteredJobs,
  selectJobsStatus
} from "selectors/jobs"
import { Loader } from "components/Loader"
import { JobsList } from "components/JobsList"
import { JobsFilter } from "components/JobsFilter"
import { resetFilters, changeFilter } from "actions/filters"
import { selectCurrentFilters, selectCurrentSearch } from "selectors/filters"
import { STATUS_LOADING } from "constants/status"

export const Jobs = React.memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetFilters())
    dispatch(requestJobsIfNeed({ organization: TEST_ORGANIZATION_REF }))
  }, [dispatch])
  const filters = useSelector(selectCurrentFilters)
  const searchString = useSelector(selectCurrentSearch)
  const contractTypesList = useSelector(selectContractTypesOptionList)
  const filteredGroupedJobs = useSelector(selectGroupedFilteredJobs)
  const jobsStatus = useSelector(selectJobsStatus)
  const changeFilterValue = useCallback(
    (filter, value) => dispatch(changeFilter({ filter, value })),
    [dispatch]
  )

  return (
    <Box backgroundColor="light.500" p="20px 80px" mt={40} borderRadius={5}>
      <Box display="flex" justifyContent="center">
        <Text variant="h3">Our offers</Text>
      </Box>
      <JobsFilter
        filters={filters}
        contractTypesList={contractTypesList}
        changeFilter={changeFilterValue}
      />
      {jobsStatus !== STATUS_LOADING ? (
        <JobsList
          searchString={searchString}
          groupedJobs={filteredGroupedJobs}
        />
      ) : (
        <Loader />
      )}
    </Box>
  )
})
