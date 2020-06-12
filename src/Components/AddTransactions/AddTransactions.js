import React, { useState } from 'react';
import './AddTransactions.modules.css';



function AddTransactions() {

    {/* Beginning with the Hooks */ }

    const [Notes, setNotes] = useState('')
    console.log(Notes);
    const [Amount, setAmount] = useState(0.00)
    console.log(Amount);

    return (
        <div className="Header">

            <h3>Add Transactions</h3>

            <input type='text' placeholder='Enter Notes' value={Notes} onChange={(Notes) => setNotes(Notes.target.value)} />
            <br />
            <input type='number' placeholder='Enter Amount' value={Amount} onChange={(Amount) => setAmount(Amount.target.value)} />
            <br />
            <button>Add This Transaction</button>

        </div>
    );
}

export default AddTransactions;