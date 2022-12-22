import React ,{useState}from "react";
import { initialState } from "../../../../reducers/productsReducer";
import toFavorite from "../../../../images/addToFavorite.svg";
import toCart from "../../../../images/addToCart.svg";
import onCart from "../../../../images/inCart.png";


import "./Card.scss";

type arrayProps = {
  key: string,
  index:number
}

export const Card = (props:arrayProps) => {
  const [UrlIcon, setUrlIcon] = useState(toCart);
  const [inCart, setInCart] = useState(false);

  const changeUrl = () =>{
    if(!inCart){
      setUrlIcon(onCart);
      setInCart(true)
      console.log(inCart);
      
    } else {
      setUrlIcon(toCart);
      setInCart(false);
      console.log(inCart);
    }
  }

  return (
    <div className="shop__card card-item">
      <div className="card-item__picture">
        <img src={initialState[`${props.index}`].images[0]} alt="image card" className="card-item__img" />
      </div>
      <h4 className="card-item__title">{initialState[`${props.index}`].title}</h4>
      <p className="card-item__desc">{initialState[`${props.index}`].description}</p>
      <div className="card-item__footer">
        <span className="card-item__price">{initialState[`${props.index}`].price}&euro;</span>
        <div className="card-item__icons">
          <img src={toFavorite} alt="" className="card-item__icon" />
          <img src={UrlIcon} alt="" className="card-item__icon" onClick={changeUrl} />
        </div>
      </div>
    </div>
  )
  
}

export default Card