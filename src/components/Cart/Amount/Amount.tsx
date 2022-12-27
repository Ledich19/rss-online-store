import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { minusAmount, plusAmount } from '../../../reducers/cartReducer'
import './Amount.scss'

const Amount = ({ productId, amount }: { productId: string; amount: number }) => {
  const dispatch = useAppDispatch()
  const handleMinusAmount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(minusAmount(productId))
  }
  const handlePlusAmount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(plusAmount(productId))
  }

  return (
    <div className="item-cart__amount amount">
      <div className="amount__minus" onClick={handleMinusAmount}>
        -
      </div>
      <div className="amount__amount">{amount}</div>
      <div className="amount__plus" onClick={handlePlusAmount}>
        +
      </div>
    </div>
  )
}

export default Amount
