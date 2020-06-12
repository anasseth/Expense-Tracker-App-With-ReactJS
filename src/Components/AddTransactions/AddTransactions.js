import React, { useState, useContext } from 'react';
import './AddTransactions.modules.css';
import { TransactionDataContext } from '../../Context/AppGlobalContext/AppContext.js';


function AddTransactions() {

    const { addTransaction } = useContext(TransactionDataContext)
    const { Transaction } = useContext(TransactionDataContext)


    const [TransactionNotes, setNotes] = useState('')
    console.log(TransactionNotes, 'Transation Notes Has Been Cleared');
    const [TransactionAmount, setAmount] = useState(0.00)
    console.log(TransactionAmount, 'Transation Amount Has Been Cleared');

    const add = () => {

    const newTransactionObject = {
            Note: TransactionNotes,
            Amount: Number(TransactionAmount)
        }
        addTransaction(newTransactionObject)
        setNotes('')
        setAmount('')
    }

    return (
        <div className="Header">

            <h3>Add Transactions</h3>

            <input type='text' placeholder='Enter Notes' required='required' value={TransactionNotes} onChange={(e) => setNotes(e.target.value)} />
            <br />
            <input required='required' type='number' placeholder='Enter Amount' value={TransactionAmount} onChange={(e) => setAmount(e.target.value)} />
            <br />
            <button onClick={add}>Add This Transaction</button>

        </div>
    );
}

export default AddTransactions;