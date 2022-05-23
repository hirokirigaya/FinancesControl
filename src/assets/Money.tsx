import { MdOutlineAttachMoney as MoneySvg } from 'react-icons/md'
import styled from 'styled-components'

const MoneyStyle = styled.span`
  svg {
    color: var(--shape);
    font-size: 30px;
  }
`

export default function Money() {
  return (
    <MoneyStyle>
      <MoneySvg />
    </MoneyStyle>
  )
}
