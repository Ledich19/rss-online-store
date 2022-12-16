import React from "react";
import "./Cart.scss";
import { AiOutlineInbox } from "react-icons/ai";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__header">
          <div className="cart__close close">
            <span className="close__first"></span>
            <span className="close__second"></span>
          </div>
          <div className="cart__title">Your shopping cart</div>
          <div className="cart__icon"><AiOutlineInbox className="cart__icon-img"/></div>
        </div>
        <div className="cart__body">
          <ItemCart/>
        </div>
        <div className="cart__footer">
          <div className="cart__cost">
            <span>
          Shipping cost

            </span>
            <span className="cart__price">40.00&euro;</span>
          </div>
          <div className="cart__total">
            <span>
          ESTIMATE TOTAL

            </span>
          <span className="cart__total-price">61.90&euro;</span>
          </div>
          <div className="cart__button">GO TO THE SHOPPING MARKET</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
