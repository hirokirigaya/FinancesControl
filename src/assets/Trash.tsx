import {BsTrash} from 'react-icons/bs'
import styled from 'styled-components'
import { useTransaction } from '../hooks/useTransactions'


const Container = styled.button`
 cursor: pointer;
 border: none;
 background-color: transparent;
 
 svg {
   color: var(--text-body);
   font-size: 1rem;
   transition: filter .2s;

   &:hover {
     filter: brightness(0.7);
   }
 }
`

interface TrashProps {
  transaction: TransactionData
}

interface TransactionData {
    id: number
    title: string
    category: string
    amount: number
    type: string
}
export function Trash({transaction}: TrashProps) {
  const {deleteTransaction} = useTransaction()

  return (
    <Container onClick={() => deleteTransaction(transaction.id)}><BsTrash/></Container>
  )
}

