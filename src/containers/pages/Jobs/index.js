import React, { useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { requestJobsIfNeed } from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import {
  selectContractTypesOptionList,
  selectGroupedPreparedJobs,
  selectJobsStatus
} from "selectors/jobs"
import { Loader } from "components/Loader"
import { JobsList } from "components/JobsList"
import { JobsFilter } from "components/JobsFilter"
import { resetFilters, changeFilter } from "actions/filters"
import { selectCurrentFilters } from "selectors/filters"
import { STATUS_LOADING } from "constants/status"
import { NO_RESULT_MESSAGE } from "constants/messages/index"
import { ALL_LABEL } from "constants/filters/index"
import { Group } from "../../../components/Group/index"

const NoResults = () => (
  <Text variant="h4" data-testid="noResults">
    {NO_RESULT_MESSAGE}
  </Text>
)

/**
 * Component for local usage. Renders jobs content (list or group of lists)
 * @param groupedJobs
 */
const JobsContent = ({ groupedJobs }) => {
  const isGrouped = !groupedJobs[ALL_LABEL]
  const isEmpty = isGrouped
    ? !Object.keys(groupedJobs).length
    : !groupedJobs[ALL_LABEL].length
  if (isEmpty) {
    return <NoResults />
  }
  return isGrouped ? (
    Object.entries(groupedJobs).map(([groupName, jobs]) => (
      <Group key={groupName} name={groupName}>
        <JobsList jobs={jobs} />
      </Group>
    ))
  ) : (
    <JobsList jobs={groupedJobs[ALL_LABEL]} />
  )
}

/**
 * Jobs page container.
 * Renders filters and Jobs list
 * If jobs are grouped, renders group of jobs lists
 */
export const Jobs = React.memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetFilters())
    dispatch(requestJobsIfNeed({ organization: TEST_ORGANIZATION_REF }))
  }, [dispatch])
  const filters = useSelector(selectCurrentFilters)
  const contractTypesList = useSelector(selectContractTypesOptionList)
  const groupedJobs = useSelector(selectGroupedPreparedJobs)
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
        <JobsContent groupedJobs={groupedJobs} />
      ) : (
        <Loader />
      )}
    </Box>
  )
})

JobsContent.propTypes = {
  groupedJobs: PropTypes.object.isRequired
}
