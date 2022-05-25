import {BsTrash} from 'react-icons/bs'
import styled from 'styled-components'
import { useTransaction } from '../hooks/useTransactions'
import { server } from '../main'


const Container = styled.span`
 cursor: pointer;
 
 svg {
   color: var(--text-body);
   font-size: 1rem;
   transition: filter .2s;

   &:hover {
     filter: brightness(0.7);
   }
 }
`

export function Trash() {
  const {transactions} = useTransaction()

  function deleteTransaction() {
    console.log(transactions)
  }

  return (
    <Container onClick={deleteTransaction}><BsTrash/></Container>
  )
}

