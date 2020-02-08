import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { requestJob } from "actions/job"
import { JobPreview } from "components/JobPreview"
import { Loader } from "components/Loader"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import { WelcomeHomeIcon } from "@welcome-ui/icons"
import { selectJob, selectJobStatus } from "selectors/job"
import { STATUS_LOADING } from "constants/status"
import { JOBS_ROUTE } from "constants/routes"

/**
 * Single job page container
 */
export const Job = React.memo(() => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(requestJob(id))
  }, [dispatch, id])
  const job = useSelector(selectJob)
  const status = useSelector(selectJobStatus)
  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Box m={20}>
        <Link to={JOBS_ROUTE}>
          <WelcomeHomeIcon size="xl" />
        </Link>
        <Text variant="body2" display="inline">
          GO&nbsp;HOME
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {status === STATUS_LOADING ? <Loader /> : <JobPreview {...job} />}
      </Box>
    </Box>
  )
})
