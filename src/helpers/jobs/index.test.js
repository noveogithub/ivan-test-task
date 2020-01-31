import { jobFuzzyMatch } from "./index"

describe("job fuzzy match test", () => {
  it("matched job", () => {
    expect(
      jobFuzzyMatch({ name: "good job", office: "good office" }, "good")
    ).toBe(true)
  })
  it("empty needle", () => {
    expect(jobFuzzyMatch({ name: "any job" }, "")).toBe(false)
  })
  it("different cases", () => {
    expect(
      jobFuzzyMatch({ name: "good job", contractType: "FULL time" }, "full")
    ).toBe(true)
  })
})
