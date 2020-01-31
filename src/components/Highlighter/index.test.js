import React from "react"
import { render } from "@testing-library/react"
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
  it("check empty search string", () => {
    const { container } = render(
      <Highlighter search="">Here is some javascript code</Highlighter>
    )
    const marked = container.querySelector("mark")
    expect(marked).toBe(null)
  })
})
