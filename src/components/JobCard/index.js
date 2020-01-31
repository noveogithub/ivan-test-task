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

const CustomizedLink = styled(Link)`
  text-decoration: none;
`

export const JobCard = React.memo(
  ({ id, name, contractType, office, searchString }) => {
    return (
      <Card
        p="0 20px"
        m={5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text variant="body2" m="10px 0 5px 0">
            <Highlighter search={searchString}>{name}</Highlighter>
          </Text>
          <Text variant="subtitle1" as="span" color="secondary.200" mb={5}>
            <Highlighter search={searchString}>{contractType}</Highlighter>
            &nbsp;-&nbsp;
            <Highlighter search={searchString}>{office}</Highlighter>
          </Text>
        </Box>
        <CustomizedLink to={generatePath(JOB_PREVIEW_ROUTE, { id })}>
          <Button variant="quaternary">See more</Button>
        </CustomizedLink>
      </Card>
    )
  }
)

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  contractType: PropTypes.string,
  office: PropTypes.string,
  searchString: PropTypes.string
}

JobCard.defaultProps = {
  name: "",
  contractType: "",
  office: "",
  searchString: ""
}
