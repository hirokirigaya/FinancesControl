import {BsArrowUpCircle as Arrow} from 'react-icons/bs'
import styled from 'styled-components'

const ArrowStyle = styled.span`
  svg {
    color: var(--green);
    font-size: 1.5rem;
  }
`

export function ArrowUp() {
  return (
    <ArrowStyle>
      <Arrow/>
    </ArrowStyle>
  )
}
