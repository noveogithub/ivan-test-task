import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestJobsIfNeed } from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import {
  selectContractTypesOptionList,
  selectJobsCollection
} from "selectors/jobs"
import { Loader } from "components/Loader"
import { JobsList } from "components/JobsList"
import { JobsFilter } from "components/JobsFilter"
import { resetFilters, changeFilter } from "actions/filters"
import { selectCurrentFilters } from "selectors/filters"

export const Jobs = React.memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetFilters())
    dispatch(requestJobsIfNeed({ organization: TEST_ORGANIZATION_REF }))
  }, [dispatch])
  const jobs = useSelector(selectJobsCollection)
  const filters = useSelector(selectCurrentFilters)
  const contractTypesList = useSelector(selectContractTypesOptionList)
  const changeFilterValue = useCallback(
    (filter, value) => dispatch(changeFilter({ filter, value })),
    [dispatch]
  )

  return (
    <Box backgroundColor="light.200" p="20px 80px" mx={8}>
      <Box display="flex" justifyContent="center">
        <Text variant="h3">Our offers</Text>
      </Box>
      <JobsFilter
        filters={filters}
        contractTypesList={contractTypesList}
        changeFilter={changeFilterValue}
      />
      {jobs.length ? <JobsList jobs={jobs} /> : <Loader />}
    </Box>
  )
})