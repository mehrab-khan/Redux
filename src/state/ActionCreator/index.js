export const DepositeMoney = (ammount) =>{
    return(dispatch)=>{
        dispatch({
            type : 'deposite',
            payload : ammount
        })
    }
}
export const WithdrawMoney = (ammount) =>{
    return(dispatch)=>{
        dispatch({
            type : 'withdraw',
            payload : ammount
        })
    }
}