export default (data, action)=>{

    if (action.type == 'ADD-TRANSACTION') {
        console.log(action.content, data.Transaction)
        console.log('Reached inside ADD-TRANSACTION in App-Reducer')
        let newTransactionData = data.Transaction
        newTransactionData.push(action.content)
        return (
            {
                Transaction: newTransactionData,
                ...data,
            }
        )
        console.log(action.type, data.Transaction)
    }

    else if (action.type == 'DELETE-TRANSACTION') {
        console.log('Reached inside Delete-TRANSACTION in App-Reducer')
        let newTransactionArray = data.Transaction
        console.log('before splice')
        newTransactionArray.splice(action.contentID, 1)
        console.log('after splice')
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



