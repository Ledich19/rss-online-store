import React, {MouseEventHandler, ReactElement, useState} from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { initialState } from "../../reducers/productsReducer";
import { JSXElement } from "@babel/types";
import { Link } from 'react-router-dom'
console.log(Link);


const ProductDetails = () => {
  const id = useParams().id;
  const [btnState, setBtnState] = useState('Add to cart');
  const [isClicked, setIsClicked] = useState(false);
  const [urlToImage, setUrlToImage] = useState(initialState[0].images[0])
  const addToCart = () =>{
    if(!isClicked){
      setBtnState('Remove from cart');
      setIsClicked(true);
    } else {
      setBtnState('Add to cart');
      setIsClicked(false)
    }
  }
  const changeHeadImage = (event:React.MouseEvent) => {
    const imageUrl = event.target as HTMLImageElement;
    setUrlToImage(imageUrl.src);
  }
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__way">
          <span className="product__span">Home / </span>
          <span className="product__span">{initialState[0].category} / </span>
          <span className="product__span">{initialState[0].brand} / </span>
          <span className="product__span">{initialState[0].title} </span>
        </div>
        <div className="product__body item">
          <div className="item__pictures">
            <img src={urlToImage} alt="head picture" className="item__img item__img_head" />
            <div className="item__small-images">
              <img src={initialState[0].images[1]} onClick={changeHeadImage} alt="first img" className="item__img" />
              <img src={initialState[0].images[2]} alt="second img" className="item__img" onClick={changeHeadImage}/>
              <img src={initialState[0].images[3]} alt="third img" className="item__img" onClick={changeHeadImage}/>
            </div>
          </div>
          <div className="item__info">
            <h3 className="item__title">{initialState[0].title}</h3>
            <p className="item__price">{initialState[0].price}$</p>
            <div className="item__prop">
              <h5 className="item__label">Description:</h5>
              <p className="item__text">{initialState[0].description}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Category:</h5>
              <p className="item__text">{initialState[0].category}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Brand:</h5>
              <p className="item__text">{initialState[0].brand}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Rate:</h5>
              <p className="item__text">{initialState[0].rating}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Size:</h5>
              <select className="item__select"> 
                <option className="item__size">S</option>
                <option className="item__size">M</option>
                <option className="item__size">L</option>
              </select>
            </div>
            <div className="item__buttons">
                <Link rel="stylesheet" to="/cart/buy-now" className="item__button">Buy now</Link>
                <button className="item__button" onClick={addToCart}>{btnState}</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
