import React from 'react';
import Header from '../Components/Header/Header';
import BalanceTiles from '../Components/BalanceTiles/BalanceTiles';
import IncomeExpenseTiles from '../Components/IncomeExpenseTiles/IncomeExpenseTiles';
import TransactionList from './Components/TransactionList/TransactionList'
import AddTransactions from './Components/AddTransactions/AddTransactions'
import './App.modules.css';



function App() {
  return (
    <div className="App">
      <Header />
      <BalanceTiles />
     
    </div>
  );
}

export default App;
