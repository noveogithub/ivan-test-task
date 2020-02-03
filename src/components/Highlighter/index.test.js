import React from "react"
import { render } from "@testing-library/react"
import { Highlighter } from "./index"

describe("Highlighter test", () => {
  it("should highlight single match", () => {
    const { container } = render(
      <Highlighter search="javascript">
        Here is some javascript code
      </Highlighter>
    )
    const marked = container.querySelector("mark")
    expect(marked.textContent).toBe("javascript")
  })
  it("should highlight multiple matches", () => {
    const { container } = render(<Highlighter search="a">banana</Highlighter>)
    const markedElements = container.querySelectorAll("mark")
    expect([...markedElements].map(marked => marked.textContent)).toEqual(["a", "a", "a"])
  })
  it("should not highlight with empty search string", () => {
    const { container } = render(
      <Highlighter search="">Here is some javascript code</Highlighter>
    )
    const marked = container.querySelector("mark")
    expect(marked).toBe(null)
  })
})
