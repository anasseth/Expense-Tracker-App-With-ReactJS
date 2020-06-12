import React, { useContext } from 'react';
import './TransactionList.modules.css';
import { TransactionDataContext } from '../../Context/AppGlobalContext/AppContext.js';

function TransactionList() {

    const { Transaction } = useContext(TransactionDataContext);
    const { deleteTransaction } = useContext(TransactionDataContext);

    console.log(Transaction)

    function remove(event) {
        event.preventDefault()
        let idOfTransaction = event.target.id
        deleteTransaction(idOfTransaction)
    }

    return (
        <div className="Header">

            <h3>Transaction List</h3>
            {Transaction.map((value, index) => <li id={index} className={(value.Amount > 0) ? 'green' : 'red'}>{value.Note}<b>{(value.Amount > 0) ? '+' : '-'}${Math.abs(value.Amount)}</b><button id={index} onClick={(event) => remove(event)}>X</button></li>)}

        </div>
    );
}

export default TransactionList;