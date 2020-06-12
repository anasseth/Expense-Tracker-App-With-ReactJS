import React, { createContext, useReducer } from 'react';
import AppReducer from '../Reducer/AppReducer';

const TransactionData = {
    Transaction: [
        {
            Note: 'CashFlow',
            Amount: 100,
        },
        {
            Note: 'CashFlow',
            Amount: 100,
        },
        {
            Note: 'CashFlow',
            Amount: -20,
        },
    ],
}

export const TransactionDataContext = createContext(TransactionData);

function AppContext({ children }) {

    const [data, dispatch] = useReducer(AppReducer, TransactionData)
    console.log(data , 'Iam in AppContext line # 24')

    function deleteTransaction(id) {
        console.log('Reached inside delete-TRANSACTION in App-Context')
        dispatch({
            type: 'DELETE-TRANSACTION',
            contentID: id
        })
    }

    function addTransaction(transactionDataFromComponent) {
        console.log('Reached inside ADD-TRANSACTION in App-Context')
        dispatch({
            type: 'ADD-TRANSACTION',
            content: transactionDataFromComponent
        })
    }

    return (
        <TransactionDataContext.Provider value={{ Transaction: data.Transaction,addTransaction,deleteTransaction }}>
            {children}
        </TransactionDataContext.Provider>
    )

}

export default AppContext;
