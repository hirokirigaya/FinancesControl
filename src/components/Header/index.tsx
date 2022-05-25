import { Logo } from '../../assets/Logo'
import { Container, Content } from './styles'

interface openPropsModal {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: openPropsModal) {
  return (
    <Container>
      <Content>
        <Logo />
        <button type='button' onClick={onOpenNewTransactionModal}>New Transaction</button>
      </Content>
    </Container>
  )
}
