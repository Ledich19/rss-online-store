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
  const [urlToImage, setUrlToImage] = useState(initialState[Number(id)].images[0])
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
          <span className="product__span">Store / </span>
          <span className="product__span">{initialState[Number(id)].category} / </span>
          <span className="product__span">{initialState[Number(id)].brand} / </span>
          <span className="product__span">{initialState[Number(id)].title} </span>
        </div>
        <div className="product__body item">
          <div className="item__pictures">
            <div className="item__big">
              <img src={urlToImage} alt="head picture" className="item__head" />
            </div>
            <div className="item__small-images">
              <img src={initialState[Number(id)].images[0]} onClick={changeHeadImage} alt="first img" className="item__img" />
              <img src={initialState[Number(id)].images[1]} alt="second img" className="item__img" onClick={changeHeadImage}/>
              <img src={initialState[Number(id)].images[2]} alt="third img" className="item__img" onClick={changeHeadImage}/>
            </div>
          </div>
          <div className="item__info">
            <h3 className="item__title">{initialState[Number(id)].title}</h3>
            <p className="item__price">{initialState[Number(id)].price}$</p>
            <div className="item__prop">
              <h5 className="item__label">Description:</h5>
              <p className="item__text">{initialState[Number(id)].description}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Category:</h5>
              <p className="item__text">{initialState[Number(id)].category}</p>
            </div>
            <div className="item__prop">
              <h5 className="item__label">Brand:</h5>
              <p className="item__text">{initialState[Number(id)].brand}</p>
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
