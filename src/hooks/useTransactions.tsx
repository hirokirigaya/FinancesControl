import {
  createContext,
  useEffect,
  ReactNode,
  useContext,
} from 'react'
import useLocalStorage from 'use-local-storage'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  category: string
  amount: number
  createdAt: Date
  type: string
}

type TransactionInput = Omit<Transaction, 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  deleteTransaction: (transactionId: number) => void;
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    'Transactions',
    []
  )

  useEffect(() => {
    // const notDeletedTransatcionts = transactions.filter((item) => item.id == 2)
    if (!transactions || transactions.length < 1) {
      setTransactions([])
    }
  }, [])

  function deleteTransaction(transactionId: number) {
    const remainingTransaction = transactions.filter(item => item.id !== transactionId)
    setTransactions(remainingTransaction)
  }

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionsContext)

  return context
}
