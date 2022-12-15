import React from 'react'
import './ItemCart.scss'

const ItemCart = () => {
  return (
    <div className="item-cart">
      <div className="item-cart__photo">
        <img src="" alt="" />
      </div>
      <div className="item-cart__description">
        <div className="item-cart__name"></div>
        <div className="item-cart__info">
          <div className="item-cart__color"></div>
          <div className="item-cart__size"></div>
        </div>

        <div className="item-cart__amount amount">
          <div className="amount__minus">-</div>
          <div className="amount__data">0</div>
          <div className="amount__plus">+</div>
        </div>

        <div className="item-cart__price"><span></span> &euro;</div>
      </div>
    </div>
  )
}

export default ItemCart
