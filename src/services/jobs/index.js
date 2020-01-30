import { request } from "services/index"
import { JOBS_API_URL } from "constants/api"

/**
 * Service to call jobs api
 */
class JobsService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getJobsByOrganizationReference = (organizationReference = "") =>
    request.get(this.baseUrl, {
      params: {
        organization_reference: organizationReference
      }
    })
}

export const JobsApiCaller = new JobsService(JOBS_API_URL)
