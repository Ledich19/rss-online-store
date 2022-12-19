import './Cart.scss'
import { AiOutlineInbox } from 'react-icons/ai'
import OrderForm from './OrderForm/OrderForm'
import DataForm from './DataForm/DataForm'
//import { CartState } from "../../app/types"

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
          <div className="cart__icon">
            <AiOutlineInbox size="25px" />
          </div>
        </div>
        {/* <OrderForm /> */}
        <DataForm />
        <div className="cart__footer">
          <div className="cart__cost">
            <span>Shipping cost</span>
            <span className="cart__price">40.00&euro;</span>
          </div>
          <div className="cart__total">
            <span>ESTIMATE TOTAL</span>
            <span className="cart__total-price">61.90&euro;</span>
          </div>
          <div className="cart__button">GO TO THE SHOPPING MARKET</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
