import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { JOB_PREVIEW_ROUTE, JOBS_ROUTE } from "constants/routes"
import { Job } from "containers/pages/Job"
import { Jobs } from "containers/pages/Jobs"
import { ThemeProvider } from "@xstyled/styled-components"
import { createTheme } from "@welcome-ui/core"
import { Box } from "@welcome-ui/box"

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent="center" display="flex" backgroundColor="light.700">
        <Box width={{ sm: 1, md: 0.5 }} minHeight="100vh">
          <BrowserRouter>
            <Switch>
              <Route path={JOBS_ROUTE} exact component={Jobs} />
              <Route path={JOB_PREVIEW_ROUTE} exact component={Job} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
