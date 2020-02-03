import { jobFuzzyMatch } from "./index"

describe("job fuzzy match test", () => {
  it("should search partial match", () => {
    expect(
      jobFuzzyMatch({ name: "good job", office: "good office" }, "good")
    ).toBe(true)
  })
  it("should return false if search string is empty", () => {
    expect(jobFuzzyMatch({ name: "any job" }, "")).toBe(false)
  })
  it("should search case insensitively", () => {
    expect(
      jobFuzzyMatch({ name: "good job", contractType: "FULL time" }, "full")
    ).toBe(true)
  })
})
