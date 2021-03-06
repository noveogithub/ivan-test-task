import React from "react"
import PropTypes from "prop-types"
import { JobCard } from "components/JobCard"

/**
 * Jobs List component
 * Renders jobs list if it's not empty
 * @param { Array } jobs
 */
export const JobsList = React.memo(({ jobs }) => {
  if (!jobs.length) {
    return null
  }
  return (
    <div data-testid="jobsList">
      {jobs.map(({ id, name, contractType, office, highlight }) => (
        <JobCard
          id={id}
          key={id}
          name={name}
          contractType={contractType}
          office={office}
          highlight={highlight || ""}
        />
      ))}
    </div>
  )
})

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      office: PropTypes.string,
      contractType: PropTypes.string
    })
  )
}

JobsList.defaultProps = {
  jobs: []
}
