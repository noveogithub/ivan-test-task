import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { JOB_PREVIEW_ROUTE, JOBS_ROUTE } from "constants/routes"
import { Jobs } from "containers/pages/Jobs"
import { ThemeProvider } from "@xstyled/styled-components"
import { createTheme } from "@welcome-ui/core"
import { Box, Text } from "welcome-ui"

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent="center" display="flex" backgroundColor="light.200">
        <Box m="4">
          <Text variant="h2">Jobs app</Text>
          <BrowserRouter>
            <Switch>
              <Route path={JOBS_ROUTE} exact component={Jobs} />
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
