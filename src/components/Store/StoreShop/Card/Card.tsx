import React ,{useState}from "react";
import toFavorite from "../../../../images/addToFavorite.svg";
import toCart from "../../../../images/addToCart.svg";
import onCart from "../../../../images/inCart.png";
import { Link } from "react-router-dom";

import "./Card.scss";
import { ProductInDb } from "../../../../app/types";

export const Card = ({ card , index, style}: {card: ProductInDb, index: number, style:object}) => {
  const [UrlIcon, setUrlIcon] = useState(toCart);
  const [inCart, setInCart] = useState(false);

  const changeUrl = () =>{
    if(!inCart){
      setUrlIcon(onCart);
      setInCart(true)
    } else {
      setUrlIcon(toCart);
      setInCart(false);
    }
  }
  
  return (
    <div className="shop__card card-item" style={style}>
      <Link to={`/product/${index}`} className="card-item__picture">
        <img src={card.thumbnail} alt="image card" className="card-item__img" />
      </Link>
      <h4 className="card-item__title">{card.title}</h4>
      <p className="card-item__desc">{card.description}</p>
      <div className="card-item__footer">
        <span className="card-item__price">{card.price}&euro;</span>
        <div className="card-item__icons">
          <img src={toFavorite} alt="" className="card-item__icon" />
          <img src={UrlIcon} alt="" className="card-item__icon" onClick={changeUrl} />
        </div>
      </div>
    </div>
  )
  
}

export default Card