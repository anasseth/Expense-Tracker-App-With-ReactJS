import React, { useContext } from 'react';
import './TransactionList.modules.css';
import { TransactionDataContext } from '../../Context/AppGlobalContext/AppContext.js';

function TransactionList() {

    const { Transaction } = useContext(TransactionDataContext);
    const { deleteTransaction } = useContext(TransactionDataContext);

    console.log(Transaction)

    const remove = e =>{
        e.preventDefault()
        let idOfTransaction = e.target.id
        deleteTransaction(idOfTransaction)
    }

    return (
        <div >

            <h3 className="TransactionList">Transaction List</h3>
            <li className='Hint'><i class="fas fa-lightbulb"></i> Tip ! To Remove Transaction DoubleClick it...</li>
            {Transaction.map((value, index) => <li onDoubleClick={(e)=>deleteTransaction(e.target.id)} id={index} className={(value.Amount > 0) ? 'green' : 'red'}>{value.Note}<b className='amount'>{(value.Amount > 0) ? '+' : '-'}${Math.abs(value.Amount)}</b></li>)}

        </div>
    );
}

export default TransactionList;