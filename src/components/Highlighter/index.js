import React from "react"
import PropTypes from "prop-types"

export const Highlighter = React.memo(({ children, search }) => {
  if (typeof children !== "string") {
    throw Error("wrong usage. Wrap text please")
  }
  const markedText = children.replace(
    new RegExp(search, "gi"),
    match => `<mark>${match}</mark>`
  )
  const markup = { __html: search ? markedText : children }
  // eslint-disable-next-line react/no-danger
  return <span dangerouslySetInnerHTML={markup} />
})

Highlighter.propTypes = {
  search: PropTypes.string,
  children: PropTypes.string.isRequired
}

Highlighter.defaultProps = {
  search: ""
}
