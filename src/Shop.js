import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { bindActionCreators} from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
  const money = useSelector(state => state.amount)
  const dispatch = useDispatch()
  const {WithdrawMoney, DepositeMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>Deposite/Withdraw Money</h2>
      <button className='btn btn-primary mx-2' onClick={()=>WithdrawMoney(100)}>-</button>
      Update Balance {money}
        <button className='btn btn-primary mx-2' onClick={()=>DepositeMoney(100)}>-</button>
    </div>
  )
}

export default Shop
