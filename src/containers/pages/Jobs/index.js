import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestJobsIfNeed } from "actions/jobs"
import { TEST_ORGANIZATION_REF } from "constants/jobs"
import { Text } from "welcome-ui"
import { selectJobs } from "selectors/jobs"
import { Loader } from "components/Loader"

export const Jobs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestJobsIfNeed({ organizationRef: TEST_ORGANIZATION_REF }))
  }, [dispatch])
  const jobs = useSelector(selectJobs)

  return (
    <div>
      <Text variant="h3">Our offers</Text>
      {!jobs.length && <Loader />}
    </div>
  )
}
