import React from "react"
import PropTypes from "prop-types"
import { JobCard } from "components/JobCard"

export const JobsList = React.memo(({ jobs }) => {
  if (!jobs.length) {
    return null
  }
  return (
    <div data-testid="jobsList">
      {jobs.map(({ id, name, contractType, office, highlight }) => (
        <JobCard
          id={id}
          key={`jobCard-${id}`}
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
