import {IoMdClose as CloseSvg} from 'react-icons/io'
import styled from 'styled-components'

const Container = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  cursor: pointer;

  svg {
    color: var(--text-body);
    font-size: 1.5rem;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`

interface CloseModalNewTransactionsProps {
  onRequestClose: () => void;
}

export function Close({onRequestClose}: CloseModalNewTransactionsProps) {
  return (
    <Container onClick={onRequestClose}>
    <CloseSvg/>
    </Container>
  )
}
