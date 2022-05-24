import {BsArrowDownCircle as Arrow} from 'react-icons/bs'
import styled from 'styled-components'


const ArrowStyle = styled.span`
  svg {
    color: var(--red);
    font-size: 1.5rem;
  }
`

export function ArrowDown() {
  return (
    <ArrowStyle>
      <Arrow/>
    </ArrowStyle>
  )
}
