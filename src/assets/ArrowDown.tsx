import {BsArrowDownCircle as Arrow} from 'react-icons/bs'
import styled from 'styled-components'


const ArrowStyle = styled.span`
  svg {
    color: var(--red);
    font-size: 26px;
  }
`

export function ArrowDown() {
  return (
    <ArrowStyle>
      <Arrow/>
    </ArrowStyle>
  )
}
