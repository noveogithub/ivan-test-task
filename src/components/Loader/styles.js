import styled, {keyframes} from 'styled-components'

const firstDot = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const middleDot = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(24px, 0);
  }
`

const lastDot = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 78px;
  height: 54px;
  & > div {
    position: absolute;
    top: 20px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: rgba(0,0,0,0.7); 
  }
  & > div:nth-child(1) {
    left: 8px;
    animation: ${firstDot} 0.6s infinite;
  }
  & > div:nth-child(2) {
    left: 8px;
    animation: ${middleDot} 0.6s infinite;
  }
  & > div:nth-child(3) {
    left: 32px;
    animation: ${middleDot} 0.6s infinite;
  }
  & > div:nth-child(4) {
    left: 56px;
    animation: ${lastDot} 0.6s infinite;
  }
`