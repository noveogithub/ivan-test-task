import { Link } from "react-router-dom"
import styled from "@xstyled/styled-components"
import { Text } from "@welcome-ui/text"
import { Card } from "@welcome-ui/card"

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  padding: 2px;
  color: ${props => props.theme.colors.secondary};
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
    border-color: ${props => props.theme.colors.secondary[200]};
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  &:hover::before, &:hover::after {
    border-color: ${props => props.theme.colors.secondary[200]};
    width: 100%;
    height: 100%;
  }
`