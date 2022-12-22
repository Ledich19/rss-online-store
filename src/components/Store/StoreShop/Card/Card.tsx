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
    <div className="shop__card card">
      <div className="card__picture">
        <img src={initialState[`${props.index}`].images[0]} alt="image card" className="card__img" />
      </div>
      <h4 className="card__title">{initialState[`${props.index}`].title}</h4>
      <p className="card__desc">{initialState[`${props.index}`].description}</p>
      <div className="card__footer">
        <span className="card__price">{initialState[`${props.index}`].price}&euro;</span>
        <div className="card__icons">
          <img src={toFavorite} alt="" className="card__icon" />
          <img src={UrlIcon} alt="" className="card__icon" onClick={changeUrl} />
        </div>
      </div>
    </div>
  )
  
}

export default Card