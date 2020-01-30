import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestJobsIfNeed } from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"
import { Text, Box } from "welcome-ui"
import { selectJobsCollection } from "selectors/jobs"
import { Loader } from "components/Loader"
import { JobsList } from "components/JobsList"

export const Jobs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestJobsIfNeed({ organization: TEST_ORGANIZATION_REF }))
  }, [dispatch])
  const jobs = useSelector(selectJobsCollection)

  return (
    <Box backgroundColor="light.200" p="20px 80px" borderRadius="lg" mt={80}>
      <Box display="flex" justifyContent="center">
        <Text variant="h3">Our offers</Text>
      </Box>
      {jobs.length ? <JobsList jobs={jobs} /> : <Loader />}
    </Box>
  )
}
