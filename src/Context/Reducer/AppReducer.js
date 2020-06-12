function AppReducer(data, action) {

    if (action.type == 'ADD-TRANSACTION') {
        return (
            {
                Transaction: [action.content, ...data],
                ...data,
            }
        )
    }

    else if (action.type == 'DELETE-TRANSACTION') {

        let newTransactionArray = data.Transaction
        newTransactionArray.splice(action.content, 1)
        return (
            {
                Transaction: newTransactionArray,
                ...data,
            }
        )

    }

    else {
        return data
    }

}
export default AppReducer;


