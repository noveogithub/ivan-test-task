import axios from "axios"
import { API_URL } from "constants/api"

/**
 * Create a new instance of axios
 */
export const request = axios.create({
  baseURL: API_URL
})
