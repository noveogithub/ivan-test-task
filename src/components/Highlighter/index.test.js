import React from "react"
import { render } from "@testing-library/react"
import { EMPTY_SEARCH_STRING } from "constants/errors"
import { Highlighter } from "./index"

describe("Highlighter test", () => {
  it("check render with default values", () => {
    const { container } = render(
      <Highlighter search="javascript">
        Here is some javascript code
      </Highlighter>
    )
    const marked = container.querySelector("mark")
    expect(marked.textContent).toBe("javascript")
  })
  it("check multiple matches", () => {
    const { container } = render(<Highlighter search="a">banana</Highlighter>)
    const markedElements = container.querySelectorAll("mark")
    expect(markedElements.length).toBe(3)
    expect([...markedElements].map(marked => marked.textContent)).toEqual(
      expect.arrayContaining(["a", "a", "a"])
    )
  })
  it("check wrong usage", () => {
    const consoleError = console.error
    console.error = jest.fn()
    let exception
    try {
      render(<Highlighter search="">lalala</Highlighter>)
    } catch (error) {
      exception = error
    }
    expect(exception.message).toEqual(EMPTY_SEARCH_STRING)
    console.error = consoleError
  })
})
