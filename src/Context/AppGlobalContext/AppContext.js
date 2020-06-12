import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const TransactionData = {
    Balance: 0,
    Income: 0,
    Expense: 0,
    Transaction: [],
}

function AppContext({ children }) {

    const [data, dispatch] = useReducer(AppReducer, TransactionData)

    function addTransaction(id) {
        dispatch({
            type: 'ADD-TRANSACTION',
            content: id
        })
    }

    function deleteTransaction(transactionDataFromComponent) {
        dispatch({
            type: 'DELETE-TRANSACTION',
            content: transactionDataFromComponent
        })
    }

    return (
        <TransactionDataContext.Provider value={data.TransactionData, addTransaction, deleteTransaction}>
            {children}
        </TransactionDataContext.Provider>
    )

}

export default AppContext;
export const TransactionDataContext = createContext(TransactionData);