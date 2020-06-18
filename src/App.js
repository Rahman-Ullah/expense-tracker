import './App.css';
import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionList} from './components/TransactionList';
import {AddTransation} from './components/AddTransation';
import {GlobalProvider} from './Contaxt/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransation />
    </div>
    </GlobalProvider>
  );
}

export default App;
