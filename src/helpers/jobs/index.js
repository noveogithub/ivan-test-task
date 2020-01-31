/**
 * checks if job object props matches given needle
 * @param { Object } job
 * @param { String } needle
 * @returns { boolean }
 */
export const jobFuzzyMatch = (job, needle) => {
  if (!needle) {
    return false
  }
  const { name, profile, description, office, contractType, department } = job
  const haystack = `
  ${name || ""}
  ${profile || ""}
  ${description || ""}
  ${office || ""}
  ${contractType || ""}
  ${department || ""}
  `
  const regexp = new RegExp(needle, "gi")
  return regexp.test(haystack)
}
