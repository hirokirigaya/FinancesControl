import styled from 'styled-components'

import {RiMoneyDollarCircleFill as Money} from 'react-icons/ri'

const LogoMoney = styled.p`
  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    
     svg {
       font-size: 46px;
       color: #33CC95;
     }
    }
`


export function Logo() {
  return (
    <LogoMoney>
      <span><Money/> dt money</span>
    </LogoMoney>
  )
}
