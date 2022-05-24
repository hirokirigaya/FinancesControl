import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import { ArrowDown } from '../../assets/ArrowDown'
import { ArrowUp } from '../../assets/ArrowUp'
import { Close } from '../../assets/Close'
import { api } from '../../services/api'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const data = {
      title,
      value,
      type,
      category
  }

  api.post('/transactions', data)
  
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Close onRequestClose={onRequestClose} />
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
          type="text"
          placeholder="Titulo" 
          value={title}
          onChange={e => setTitle(e.target.value)}
         
        />
        <input
         type="number"
         placeholder="Valor" 
         value={value}
         onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
           type="button"
           onClick={() => setType('deposit')}
           isActive={type === 'deposit'}
           activeColor={'green'}
           >
            <p>
              <ArrowUp />
              Entrada
            </p>
          </RadioBox>
          <RadioBox 
          type="button"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor={'red'}
          >
            <p>
              <ArrowDown />
              Saida
            </p>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
        type="text" 
        placeholder="Categoria"
        value={category}
        onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}