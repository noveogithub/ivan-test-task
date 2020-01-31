import React from "react"
import { render } from "@testing-library/react"
import { getByTestId } from "@testing-library/dom"
import { ALL_LABEL } from "constants/filters"
import { ThemeProvider } from "@xstyled/styled-components"
import { MemoryRouter as Router } from "react-router-dom"
import { createTheme } from "@welcome-ui/core"
import { NO_RESULT_MESSAGE } from "constants/messages"
import { JobsList } from "./index"

const theme = createTheme({})

const renderComponent = ({ jobs, search }) =>
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <JobsList groupedJobs={jobs} searchString={search} />
      </Router>
    </ThemeProvider>
  )

const mockJobs = [
  { id: `1`, name: "Good job", office: "Nsk", contractType: "freelance" },
  { id: `2`, name: "Bad job", office: "Msk", contractType: "full-time" },
  { id: `3`, name: "Great job", office: "Lnd", contractType: "part-time" }
]

describe("Jobs list test", () => {
  it("test case: without group", () => {
    const { container } = renderComponent({
      theme: {},
      jobs: { [ALL_LABEL]: mockJobs },
      search: ""
    })
    const allJobsContainer = getByTestId(container, "allJobs")
    expect(allJobsContainer.childNodes.length).toBe(3)
  })
  it("test case: grouped", () => {
    const { container } = renderComponent({
      theme: {},
      jobs: {
        firstGroup: mockJobs,
        secondGroup: mockJobs,
        thirdGroup: mockJobs
      },
      search: ""
    })
    const groupedJobsContainer = getByTestId(container, "groupedJobs")
    const groupTags = groupedJobsContainer.querySelectorAll(
      '[data-testid*="groupTag"]'
    )
    expect(groupTags.length).toBe(3)
    const [firstGroupTag] = groupTags
    expect(firstGroupTag.firstChild.textContent).toBe("firstGroup")
  })
  it("test case: empty", () => {
    const { container } = renderComponent({
      theme: {},
      jobs: {},
      search: ""
    })
    const noresultsBlock = getByTestId(container, "noResults")
    expect(noresultsBlock.textContent).toBe(NO_RESULT_MESSAGE)
  })
})
