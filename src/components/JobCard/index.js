import React from "react"
import { Link, generatePath } from "react-router-dom"
import styled from "@xstyled/styled-components"
import { Box } from "@welcome-ui/box"
import { Text } from "@welcome-ui/text"
import PropTypes from "prop-types"
import { Button } from "@welcome-ui/button"
import { Card } from "@welcome-ui/card"
import { JOB_PREVIEW_ROUTE } from "constants/routes"

const CustomizedLink = styled(Link)`
  text-decoration: none;
`

export const JobCard = React.memo(({ id, name, contractType, office }) => {
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
          {name}
        </Text>
        <Text variant="subtitle1" as="span" color="secondary.200" mb={5}>
          {contractType} - {office}
        </Text>
      </Box>
      <CustomizedLink to={generatePath(JOB_PREVIEW_ROUTE, { id })}>
        <Button variant="quaternary">See more</Button>
      </CustomizedLink>
    </Card>
  )
})

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  contractType: PropTypes.string,
  office: PropTypes.string
}

JobCard.defaultProps = {
  name: "",
  contractType: "",
  office: ""
}
