import React, { useState } from 'react'
import { Link , useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addProductToCart, removeProductFromCart } from '../../reducers/cartReducer'
import { ProductInCart, SizeType } from '../../app/types'
import { setIsOpenForm } from '../../reducers/modalsReducer'
import './ProductDetails.scss'

const ProductDetails = () => {
  const dispatch = useAppDispatch()
  const cartContent = useAppSelector((state) => state.cart)
  const id = useParams().id
  const product = useAppSelector((state) => state.products.find((p) => p.id === id))
  const [urlToImage, setUrlToImage] = useState(product?.thumbnail)
  const [size, setSize] = useState(product ? product.size[0].size : '')
  if (!product) {
    return null
  }

  const itemInCart = () => {
    for (let i = 0; i < cartContent.length; i++) {
      if (cartContent[i].id === product.id) {
        return true
      }
    }
    return false
  }

  const createObject = () => {
    const currentObj: ProductInCart = JSON.parse(JSON.stringify(product))
    const productSize = product.size.find((s) => s.size === size)
    currentObj.amount = 1
    currentObj.size = size
    currentObj.amountAll = productSize ? productSize.stock : 0
    return currentObj
  }

  const addToCart = () => {
    if (itemInCart()) {
      dispatch(removeProductFromCart(product.id))
    } else {
      dispatch(addProductToCart(createObject()))
    }
  }

  const fastBuyItem = () => {
    if (!itemInCart()) {
      dispatch(addProductToCart(createObject()))
    }
    dispatch(setIsOpenForm(true))
  }

  const changeHeadImage = (event: React.MouseEvent) => {
    const imageUrl = event.target as HTMLImageElement
    setUrlToImage(imageUrl.src)
  }

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__way">
          <span className="product__span">Store / </span>
          <span className="product__span">{product.category} / </span>
          <span className="product__span">{product.brand} / </span>
          <span className="product__span">{product.title} </span>
        </div>
        <div className="product__body item">
          <div className="item__pictures">
            <div className="item__big">
              <img src={urlToImage} alt="head picture" className="item__head" />
            </div>
            <div className="item__small-images">
              {product.images.map((image) => {
                return (
                  <img
                    key={image}
                    src={image}
                    onClick={changeHeadImage}
                    alt="first img"
                    className="item__img"
                  />
                )
              })}
            </div>
          </div>
          <div className="item__info">
            <h3 className="item__title">{product.title}</h3>
            <p className="item__price">{product.price}$</p>
            <div className="item__prop">
              <h5 className="item__label">Description:</h5>
              <p className="item__text">{product.description}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Category:</h5>
              <p className="item__text">{product.category}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Brand:</h5>
              <p className="item__text">{product.brand}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Rate:</h5>
              <p className="item__text">{product.rating}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Size:</h5>
              <select
                onChange={(e) => setSize(e.target.value as SizeType)}
                value={size}
                className="item__select"
              >
                {product.size.map((size) => {
                  return (
                    <option key={size.size} value={size.size} className="item__size">
                      {size.size}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="item__buttons">
              <Link rel="stylesheet" to="/cart" className="item__button" onClick={fastBuyItem}>
                Buy now
              </Link>
              <button className="item__button" onClick={addToCart}>
                {itemInCart() ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
