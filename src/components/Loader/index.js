import { Badge } from "welcome-ui"
import React from "react"

/**
 * Simple loader
 * temporary solution (there's no spinner in welcome/ui lib)
 * @constructor
 */
export const Loader = () => (
  <Badge size="lg" variant="secondary">
    Loading ...
  </Badge>
)
