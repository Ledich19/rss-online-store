import './Cart.scss'
import { AiOutlineInbox } from 'react-icons/ai'
import OrderForm from './OrderForm/OrderForm'
import DataForm from './DataForm/DataForm'
import { setIsOpenForm } from '../../reducers/modalsReducer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import OrderFinish from './OrderFinish/OrderFinish'
import CartFooter from './CartFooter/CartFooter'
//import { CartState } from "../../app/types"

const Cart = () => {
  const modalState = useAppSelector((state) => state.modals)

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
        {modalState.isOderFinish ? (
          <OrderFinish />
        ) : modalState.isForm ? (
          <DataForm />
        ) : (
          <OrderForm />
        )}

        <CartFooter />
      </div>
    </div>
  )
}

export default Cart
