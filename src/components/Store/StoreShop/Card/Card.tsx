import React, { useState } from 'react'
import toFavorite from '../../../../images/addToFavorite.svg'
import toCart from '../../../../images/addToCart.svg'
import onCart from '../../../../images/inCart.png'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { addProductToCart, removeProductFromCart } from '../../../../reducers/cartReducer'
import './Card.scss'
import { ProductInDb } from '../../../../app/types'
import { ProductInCart } from '../../../../app/types'

export const Card = ({ card, style }: { card: ProductInDb; style: object }) => {
  const [UrlIcon, setUrlIcon] = useState(toCart)
  const dispatch = useAppDispatch()
  const cartContent = useAppSelector((state) => state.cart)

  const createObject = () => {
    const currentObj: ProductInCart = JSON.parse(JSON.stringify(card))
    currentObj.amount = 1
    currentObj.size = "S"
    currentObj.amountAll = 10
    return currentObj
  }
  const itemInCart = () => {
    for(let i = 0 ; i < cartContent.length; i++){
      if(createObject().id === cartContent[i].id){
        return true
      } else return false
    }
  }
  let icon ;
  itemInCart() ? icon = onCart : icon = toCart;
  const changeUrl = () => {
    if (!itemInCart()) {
      //setUrlIcon(onCart)
      icon = onCart
      dispatch(addProductToCart(createObject()))
    } else {
      // setUrlIcon(toCart)
      icon = toCart;
      dispatch(removeProductFromCart(card.id))
    }
  }

  return (
    <div className="shop__card card-item" style={style}>
      <Link to={`/product/${card.id}`} className="card-item__picture">
        <img src={card.thumbnail} alt="image card" className="card-item__img" />
      </Link>
      <h4 className="card-item__title">{card.title}</h4>
      <p className="card-item__desc">{card.description}</p>
      <div className="card-item__footer">
        <span className="card-item__price">{card.price}&euro;</span>
        <div className="card-item__icons">
          <img src={toFavorite} alt="to favourite" className="card-item__icon" />
          <img src={icon} alt="to cart" className="card-item__icon" onClick={changeUrl} />
        </div>
      </div>
    </div>
  )
}

export default Card
