import React, { useContext } from 'react';
import './IncomeExpenseTiles.modules.css';
import { TransactionDataContext } from '../../Context/AppGlobalContext/AppContext.js';



function IncomeExpenseTiles() {

  const { Transaction } = useContext(TransactionDataContext);

  const Amount = Transaction.map(eachEntry => eachEntry.Amount)

  let Income = 0;
  let Expense = 0;

  for (var i = 0; i < Amount.length; i++) {
    if (Amount[i] > 0) {
      Income += Amount[i];
    }
    else {
      Expense += Amount[i]
    }
  }


  Income = Math.abs(Income.toFixed(2));
  Expense = Math.abs(Expense.toFixed(2));

  return (
    <div className="IncomeExpenseTiles">

      <div>
        INCOME
        <br />
        <b>${Income}</b>
      </div>
      <div>
        EXPENSE
        <br />
        <b>${Expense}</b>
      </div>

    </div>
  );
}

export default IncomeExpenseTiles;