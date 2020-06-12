import React, { createContext, useReducer } from 'react';
import AppReducer from '../Reducer/AppReducer';

const TransactionData = {
    Transaction: [],
    Balance: 0,
    Income: 0,
    Expense: 0,
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
        <TransactionDataContext.Provider value={{transactions:data , addTransaction, deleteTransaction}}>
            {children}
        </TransactionDataContext.Provider>
    )

}

export default AppContext;
export const TransactionDataContext = createContext(TransactionData);