import React from "react"
import PropTypes from "prop-types"

/**
 * Simple Component to highlight text.
 * Uses html mark tag to highlight part of the text
 * Searches for given string globally
 * @note except children to be text
 */
export const Highlighter = React.memo(({ children, search }) => {
  if (!search) {
    return children
  }
  const markedText = children.replace(
    new RegExp(search, "gi"),
    match => `<mark>${match}</mark>`
  )
  const markup = { __html: markedText }
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
