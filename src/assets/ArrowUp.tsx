import {BsArrowUpCircle as Arrow} from 'react-icons/bs'
import styled from 'styled-components'

const ArrowStyle = styled.span`
  svg {
    color: var(--green);
    font-size: 26px;
  }
`

export function ArrowUp() {
  return (
    <ArrowStyle>
      <Arrow/>
    </ArrowStyle>
  )
}
