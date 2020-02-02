import React from "react"
import { Link, generatePath } from "react-router-dom"
import styled from "@xstyled/styled-components"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import PropTypes from "prop-types"
import { Button } from "@welcome-ui/button"
import { Card } from "@welcome-ui/card"
import { JOB_PREVIEW_ROUTE } from "constants/routes"
import { Highlighter } from "components/Highlighter"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledCard = styled(Card)`
  padding: 0 20px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
      <StyledCard>
        <Box data-testid="jobShortInfo">
          <Text variant="body2" m="10px 0 5px 0">
            <Highlighter search={highlight}>{name}</Highlighter>
          </Text>
          <Text variant="subtitle1" as="span" color="secondary.200" mb={5}>
            <Highlighter search={highlight}>{contractType}</Highlighter>
            &nbsp;-&nbsp;
            <Highlighter search={highlight}>{office}</Highlighter>
          </Text>
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
