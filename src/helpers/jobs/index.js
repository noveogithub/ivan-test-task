export const jobFuzzyMatch = (job, needle) => {
  const { name, profile, description, office, contractType, department } = job
  const haystack = `${name}${profile}${description}${office}${contractType}${department}`
  const regexp = new RegExp(needle, "gi")
  return regexp.test(haystack)
}
