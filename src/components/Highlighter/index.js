import React from "react"
import PropTypes from "prop-types"
import { EMPTY_SEARCH_STRING } from "constants/errors"

/**
 * Simple Component to highlight text.
 * Uses html mark tag to highlight part of the text
 * Searches for given string globally
 * @note except children to be text
 */
export const Highlighter = React.memo(({ children, search }) => {
  if (!search) {
    throw Error(EMPTY_SEARCH_STRING)
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
