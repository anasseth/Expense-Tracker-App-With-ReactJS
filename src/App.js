import React from 'react';
import Header from './Components/Header/Header';
import BalanceTiles from './Components/BalanceTiles/BalanceTiles.js';
import IncomeExpenseTiles from './Components/IncomeExpenseTiles/IncomeExpenseTiles';
import TransactionList from './Components/TransactionList/TransactionList'
import AddTransactions from './Components/AddTransactions/AddTransactions'
import AppContext from './Context/AppGlobalContext/AppContext'
import './App.modules.css';



function App() {
  return (
    <AppContext>
      <div className="App">
        <div className='AppCompBox'>
          <Header />
          <BalanceTiles />
          <IncomeExpenseTiles />
          <TransactionList />
          <AddTransactions />

        </div>
      </div>
    </AppContext>
  );
}

export default App;
