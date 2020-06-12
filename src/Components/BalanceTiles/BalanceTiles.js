import React, { useContext } from 'react';
import './BalanceTiles.modules.css';
import { TransactionDataContext } from '../../Context/AppGlobalContext/AppContext.js';

function BalanceTiles() {

  const { Transaction } = useContext(TransactionDataContext);
  const Amount = Transaction.map(eachEntry => eachEntry.Amount)

  let sum = 0;

  for (var i = 0; i < Amount.length; i++) {
    sum += Amount[i];
  }

  sum = sum.toFixed(2);


  return (
    <div className="BalanceTiles">
      YOUR CURRENT BALANCE
      <br />
     ${sum}
    </div>
  );
}

export default BalanceTiles;