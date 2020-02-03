import React from "react"
import { render } from "@testing-library/react"
import { getByTestId, queryByTestId } from "@testing-library/dom"
import { ALL_LABEL } from "constants/filters"
import { ThemeProvider } from "@xstyled/styled-components"
import { MemoryRouter as Router } from "react-router-dom"
import { createTheme } from "@welcome-ui/core"
import { JobsList } from "./index"

const theme = createTheme({})

/**
 * render decorator
 * Injects styled components theme and react-router
 * @param jobs
 */
const renderComponent = ({ jobs }) =>
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <JobsList jobs={jobs} />
      </Router>
    </ThemeProvider>
  )

const mockJobs = [
  { id: `1`, name: "Good job", office: "Nsk", contractType: "freelance" },
  { id: `2`, name: "Bad job", office: "Msk", contractType: "full-time" },
  { id: `3`, name: "Great job", office: "Lnd", contractType: "part-time" }
]

describe("Jobs list test", () => {
  it("shouldn't render empty collection", () => {
    const { container } = renderComponent({ jobs: [] })
    const jobsContainer = queryByTestId(container, "jobsList")
    expect(jobsContainer).toBe(null)
  })
  it("should render not empty collection correctly", () => {
    const { container } = renderComponent({ jobs: mockJobs })
    const jobsContainer = getByTestId(container, "jobsList")
    expect(jobsContainer.childNodes.length).toBe(3)
  })
})
