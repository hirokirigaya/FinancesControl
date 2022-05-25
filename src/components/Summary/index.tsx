import { ArrowDown } from '../../assets/ArrowDown'
import { ArrowUp } from '../../assets/ArrowUp'
import Money from '../../assets/Money'
import { useTransaction } from '../../hooks/useTransactions'
import { Container } from './styles'

export function Summary() {
  const { transactions } = useTransaction()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Deposit</p>
          <ArrowUp />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Withdraw</p>
          <ArrowDown />
        </header>
        <strong>-
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-green">
        <header>
          <p>Total</p>
          <Money />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
