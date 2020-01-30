import React from "react"
import { JobCard } from "components/JobCard"

export const JobsList = ({ jobs }) => {
  return (
    <div>
      {jobs.map(job => (
        <JobCard key={`jobCard-${job.id}`} {...job} />
      ))}
    </div>
  )
}
