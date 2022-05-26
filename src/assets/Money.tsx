import { MdOutlineAttachMoney as MoneySvg } from 'react-icons/md'
import styled from 'styled-components'

const MoneyStyle = styled.span`
  svg {
    color: var(--shape);
    font-size: 1.5rem;
  }
`

export default function Money() {
  return (
    <MoneyStyle>
      <MoneySvg />
    </MoneyStyle>
  )
}
