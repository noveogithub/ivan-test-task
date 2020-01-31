import React from "react"
import PropTypes from "prop-types"
import { JobCard } from "components/JobCard"
import { Text } from "@welcome-ui/text"

export const JobsList = React.memo(({ jobs }) => {
  if (!jobs.length) {
    return <Text variant="h4">No results...</Text>
  }
  return (
    <div>
      {jobs.map(({ id, name, contractType, office }) => (
        <JobCard
          id={id}
          key={`jobCard-${id}`}
          name={name}
          contractType={contractType}
          office={office}
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
      profile: PropTypes.string,
      office: PropTypes.string,
      websitesUrls: PropTypes.array,
      description: PropTypes.string,
      contractType: PropTypes.string,
      publishedAt: PropTypes.instanceOf(Date)
    })
  ).isRequired
}
