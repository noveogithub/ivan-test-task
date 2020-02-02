import React from "react"
import { render } from "@testing-library/react"
import { getByTestId, getByText } from "@testing-library/dom"
import {JOB_PREVIEW_ROUTE} from "constants/routes/index";
import { ALL_LABEL } from "constants/filters"
import { ThemeProvider } from "@xstyled/styled-components"
import { generatePath, MemoryRouter as Router } from "react-router-dom"
import { createTheme } from "@welcome-ui/core"
import { JobCard } from "./index"

const theme = createTheme({})

/**
 * render decorator
 * Injects styled components theme and react-router
 * @param jobs
 */
const renderComponent = ({ job }) =>
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <JobCard {...job} />
      </Router>
    </ThemeProvider>
  )

const mockJob = {
  id: '1234',
  name: 'React developer',
  contractType: 'fulltime',
  office: 'Annecy',
  highlight: '',
}

describe("Job Card test", () => {
  const { name, contractType, office, id } = mockJob;
  it("test short job info", () => {
    const { container } = renderComponent({ job: mockJob })
    const jobShortInfo = getByTestId(container, 'jobShortInfo')
    const infoNodes = jobShortInfo.childNodes
    expect(infoNodes[0].textContent).toBe(name)
    const contractAndOfficeRegexp = new RegExp(`${contractType}.*${office}`)
    expect(infoNodes[1].textContent).toMatch(contractAndOfficeRegexp)
  })
  it("job link test", () => {
    const { container } = renderComponent({ job: mockJob })
    const expectedUrl = generatePath(JOB_PREVIEW_ROUTE, { id })
    expect(container.querySelector('a').href).toMatch(expectedUrl)
  })
})
