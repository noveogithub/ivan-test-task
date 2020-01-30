import React, { useEffect } from "react"
import { JobsApiCaller } from "requests/jobs"
import { ThemeProvider } from "theming"
import { Box, Text } from "welcome-ui"
import { theme } from "./theme"
import "./App.css"

function App() {
  useEffect(() => {
    JobsApiCaller.getJobsByOrganizationReference("Pg4eV6k").then(console.log)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent="center" display="flex" backgroundColor="lightGrey">
        <Box>
          <Text variant="h2">Our offers</Text>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
