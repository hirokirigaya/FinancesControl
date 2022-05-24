import {createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './services/api'

export const TransactionsContext = createContext<Transaction[]>([])


interface Transaction {
  id: number
  title: string
  category: string
  amount: number
  createdAt: string
  type: string
}

interface TransactionsProviderProps {
  children: ReactNode;
}


export function TransactionsProvider ({children}: TransactionsProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransaction(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transaction}>
      {children}
    </TransactionsContext.Provider>
  )
}