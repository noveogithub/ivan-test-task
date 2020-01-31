import { objectCamelizer } from "helpers/data"
import { dateOffset } from "helpers/date"
import { WEEK_OFFSET } from "constants/date"

export const prepareJob = job => {
  const preparedJob = objectCamelizer(job)
  return {
    id: `${preparedJob.id}`,
    name: preparedJob.name || "",
    profile: preparedJob.profile || "",
    office: preparedJob.office.name || "",
    department: preparedJob.department.name || "",
    websitesUrls: preparedJob.websitesUrls || [],
    description: preparedJob.description || "",
    contractType: preparedJob.contractType.en || "",
    publishedAt: preparedJob.publishedAt
      ? new Date(preparedJob.publishedAt)
      : dateOffset(-WEEK_OFFSET)
  }
}

export const prepareJobs = (jobs = []) => jobs.map(prepareJob)
