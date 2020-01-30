import React, { useEffect } from "react"
import { JobsApiCaller } from "services/jobs"
import logo from "./logo.svg"
import "./App.css"

function App() {
  useEffect(() => {
    JobsApiCaller.getJobsByOrganizationReference("Pg4eV6k").then(console.log)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
