import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import BalanceTiles from './Components/BalanceTiles/BalanceTiles.js';
import IncomeExpenseTiles from './Components/IncomeExpenseTiles/IncomeExpenseTiles';
import TransactionList from './Components/TransactionList/TransactionList'
import AddTransactions from './Components/AddTransactions/AddTransactions'
import AppContext from './Context/AppGlobalContext/AppContext'
import './App.modules.css';
import logolo from './logolo1.png'
import loader from './loader.gif'



function App() {

  const [loadingStatus, setLoadingStatus] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false)
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext>
      
      <div className={!loadingStatus ? 'hide' : 'loading'}>
        <img className='imglo' src={logolo} />
        <br />
        <b className='Tagline'>Track Your Daily Expenses</b>
        <br />
        <br />
        <img src={loader} className='loader'/>
      </div>
      
      <div className={!loadingStatus ? 'App' : 'hide'}>
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
