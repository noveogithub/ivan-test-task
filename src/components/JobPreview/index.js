import { Card } from "@welcome-ui/card"
import { Text } from "@welcome-ui/text"
import React from "react"
import PropTypes from "prop-types"

/**
 * Job preview component
 * Represents Job info card
 * @param name
 * @param publishedAt
 * @param office
 * @param contractType
 * @param description
 * @constructor
 */
export const JobPreview = ({
  name,
  publishedAt,
  office,
  contractType,
  description
}) => (
  <Card maxWidth={800}>
    <Card.Cover src="https://media.proglib.io/wp-uploads/2019/06/javascript-everywhere.jpg" />
    <Card.Body>
      <Text as="h4" fontWeight="bold" mt={0} mb="lg" color="secondary.500">
        {name}
      </Text>
      <Text color="secondary.500">
        {publishedAt ? publishedAt.toDateString() : ""}&nbsp;
        {office}&nbsp;
        {contractType ? `(${contractType})` : ""}
      </Text>
      <Text
        color="secondary.500"
        variant="body2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Card.Body>
  </Card>
)

JobPreview.propTypes = {
  name: PropTypes.string,
  publishedAt: PropTypes.instanceOf(Date),
  office: PropTypes.string,
  contractType: PropTypes.string,
  description: PropTypes.string
}

JobPreview.defaultProps = {
  name: "",
  publishedAt: new Date(),
  office: "",
  contractType: "",
  description: ""
}
