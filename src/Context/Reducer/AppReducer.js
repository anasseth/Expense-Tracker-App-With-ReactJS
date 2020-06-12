export default (data, action) => {
    switch (action.type) {
        case 'ADD-TRANSACTION':
            return {
                ...data,
                Transaction: [action.content, ...data.Transaction]
            }
        case 'DELETE-TRANSACTION':
            var newTransactionArray = data.Transaction
            return ({
                ...data,
                Transaction: newTransactionArray.filter((a, i) => i != action.contentID),
            });

        default:
            return data;
    }

    // Their Seems To Be A Problem With The Below Code It Calls Reducer Twice and hence action was also dispatch twice causing the removal and addition of 
    // Transaction twice. 
    // I can't find the exact solution but after carefully examining both codes i found that 
    // if you are applying operation on states array outside return method it will dispatch action twice
    // But If you perform operation on array inside the return method the code works as planned

// Comment Out the above Lines of Code And unComment below code and run it you will find the problem


    // switch (action.type) {
    // case 'ADD-TRANSACTION':
    //     console.log(action.content, data.Transaction)
    //     console.log('Reached inside ADD-TRANSACTION in App-Reducer')
    //     let newTransactionData = data.Transaction
    //     // newTransactionData.push(action.content)
    //     console.log('DELETE-TRANSACTION')
    //     return ({
    //         ...data,
    //         Transaction: newTransactionData,
    //     });

    // case 'DELETE-TRANSACTION':
    //     console.log('Reached inside Delete-TRANSACTION in App-Reducer')
    //     let newTransactionArray = data.Transaction
    //     console.log('before splice')
    //     // newTransactionArray.splice(action.contentID, 1)
    //     console.log('DELETE-TRANSACTION')
    //     console.log('after splice')
    //     return ({
    //         ...data,
    //         Transaction: newTransactionArray,
    //     });


    // default:
    //     return data}


}



