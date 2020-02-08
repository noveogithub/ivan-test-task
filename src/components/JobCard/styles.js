import { Link } from "react-router-dom"
import styled from "@xstyled/styled-components"
import { Text } from "@welcome-ui/text"
import { Card } from "@welcome-ui/card"

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledCard = styled(Card)`
  padding: 5px 20px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledTitle = styled(Text)`
  margin: 10px 0 5px 0
`

export const StyledInfoText = styled(Text)`
  display: inline;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.secondary[200]};
`