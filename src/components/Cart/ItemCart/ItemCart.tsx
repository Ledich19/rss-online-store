import React from 'react'
import { ItemCartProps } from '../../../app/types'
import Amount from '../Amount/Amount'
import './ItemCart.scss'
import { useNavigate } from 'react-router-dom'

const ItemCart = ({ id, name, color, size, amount, price, photo }: ItemCartProps) => {
  const navigate = useNavigate()
  const handleShowProduct = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/product/55')
  }

  return (
    <div className="item-cart">
      <div className="item-cart__photo">
        <img src={photo} alt={name} />
      </div>
      <div className="item-cart__description">
        <div className="item-cart__wrapper">
          <div onClick={handleShowProduct} className="item-cart__name">
            {name}
          </div>
          <div className="item-cart__info">
            <div className="item-cart__color">color: {color}</div>
            <div className="item-cart__size">size: {size}</div>
          </div>

          <Amount productId={id} amount={amount} />
        </div>

        <div className="item-cart__price">
          <span>{price * amount}</span> &euro;
        </div>
      </div>
    </div>
  )
}

export default ItemCart
