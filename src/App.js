import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { JobsApiCaller } from "requests/jobs"
import { JOB_PREVIEW_ROUTE, JOBS_ROUTE } from "constants/routes"
import { ThemeProvider } from "theming"
import { Box, Text } from "welcome-ui"
import { theme } from "./theme"

function App() {
  useEffect(() => {
    JobsApiCaller.getJobsByOrganizationReference("Pg4eV6k").then(console.log)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent="center" display="flex" backgroundColor="lightGrey">
        <Box>
          <Text variant="h2">Jobs app</Text>
          <BrowserRouter>
            <Switch>
              <Route
                path={JOBS_ROUTE}
                exact
                component={() => <div>jobs</div>}
              />
              <Route
                path={JOB_PREVIEW_ROUTE}
                exact
                component={() => <div>exact job</div>}
              />
            </Switch>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
