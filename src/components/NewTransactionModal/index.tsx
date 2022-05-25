import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import { ArrowDown } from '../../assets/ArrowDown'
import { ArrowUp } from '../../assets/ArrowUp'
import { Close } from '../../assets/Close'
import { useTransaction } from '../../hooks/useTransactions'
import { server } from '../../main'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')

  const {createTransaction} = useTransaction()

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
  
    
    await createTransaction({
      title,
      amount,
      category,
      type
    })

    server.db.transactions.insert({
      title: title,
      amount: amount,
      category: category,
      type: type,
      createdAt: new Date()
    })
      
      setTitle('');
      setCategory('');
      setType('deposit');
      setAmount(0);
      
      onRequestClose()

    }

    console.log(server.db.transactions)
    

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Close onRequestClose={onRequestClose} />
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>
        <input 
          type="text"
          placeholder="Title" 
          value={title}
          onChange={e => setTitle(e.target.value)}
         
        />
        <input
         type="number"
         placeholder="Value" 
         value={amount}
         onChange={e => setAmount(Number(e.target.value))}
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
              Deposit
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
              Withdraw
            </p>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
        type="text" 
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}