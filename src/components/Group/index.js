import React from "react"
import PropTypes from "prop-types"
import { Tag } from "@welcome-ui/tag"

/**
 * Simple wrapper for using with grouped lists/collections
 * Added `Tag` element with group name
 * @param name
 * @param children
 */
export const Group = ({ name, children }) => (
  <div>
    <Tag variant="secondary" size="lg" m={5}>
      {name}
    </Tag>
    {children}
  </div>
)

Group.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
