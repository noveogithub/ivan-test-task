import React from "react"
import { generatePath } from "react-router-dom"
import { Box } from "@welcome-ui/box"
import PropTypes from "prop-types"
import { Button } from "@welcome-ui/button"
import { JOB_PREVIEW_ROUTE } from "constants/routes"
import { Highlighter } from "components/Highlighter"
import { StyledCard, StyledLink, StyledTitle, StyledInfoText } from "./styles"

/**
 * Job card component. Displays short info about job.
 * Contains link to job preview page.
 * Takes highlight prop to highlight matches in text
 * @param id
 * @param name
 * @param contractType
 * @param office
 * @param highlight
 */
export const JobCard = React.memo(
  ({ id, name, contractType, office, highlight }) => {
    return (
      <StyledCard flexDirection={{ xs: "column", md: "row" }}>
        <Box data-testid="jobShortInfo" textAlign={{ xs: "center", md: "left" }}>
          <StyledTitle variant="body2">
            <Highlighter search={highlight}>{name}</Highlighter>
          </StyledTitle>
          <StyledInfoText variant="subtitle1">
            <Highlighter search={highlight}>{contractType}</Highlighter>
            &nbsp;-&nbsp;
            <Highlighter search={highlight}>{office}</Highlighter>
          </StyledInfoText>
        </Box>
        <StyledLink to={generatePath(JOB_PREVIEW_ROUTE, { id })}>
          <Button variant="quaternary">See more</Button>
        </StyledLink>
      </StyledCard>
    )
  }
)

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  contractType: PropTypes.string,
  office: PropTypes.string,
  highlight: PropTypes.string
}

JobCard.defaultProps = {
  name: "",
  contractType: "",
  office: "",
  highlight: ""
}
