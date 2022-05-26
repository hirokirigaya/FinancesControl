import { Trash } from '../../assets/Trash'
import { useTransaction } from '../../hooks/useTransactions'
import { Container } from './styles'


export function TransactionsTable() {
  const { transactions } = useTransaction()
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={i}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </td>
              <td>
              <Trash transaction={transaction}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
