import React from "react"
import { Link, generatePath } from "react-router-dom"
import styled from "@xstyled/styled-components"
import { Text, Button } from "welcome-ui"
import { Card } from "@welcome-ui/card"
import { JOB_PREVIEW_ROUTE } from "constants/routes"

const CustomizedLink = styled(Link)`
  text-decoration: none;
`

export const JobCard = ({ id, name }) => {
  return (
    <Card
      p="0 20px"
      m={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>
        <Text variant="body1" m="md">
          {name}
        </Text>
        <Text variant="body3">contract type</Text>
      </div>
      <CustomizedLink to={generatePath(JOB_PREVIEW_ROUTE, { id })}>
        <Button variant="quaternary">See more</Button>
      </CustomizedLink>
    </Card>
  )
}
