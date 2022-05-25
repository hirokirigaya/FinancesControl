import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isOpenTransactionTableModal, setIsOpenTransactionTableOpenModal] = useState(false)

  function handleOpenTransactionModal() {
    setIsOpenTransactionTableOpenModal(true)
  }
  function handleCloseTransactionModal() {
    setIsOpenTransactionTableOpenModal(false)
  }

  return (
    <>
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isOpenTransactionTableModal} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
    </>
  );
};

