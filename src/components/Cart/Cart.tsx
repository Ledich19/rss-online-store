import './Cart.scss'
import { AiOutlineInbox } from 'react-icons/ai'
import OrderForm from './OrderForm/OrderForm'
import DataForm from './DataForm/DataForm'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import OrderFinish from './OrderFinish/OrderFinish'
import CartFooter from './CartFooter/CartFooter'
import { useNavigate } from 'react-router-dom'
import { setIsOpenForm, setOpenOrderFinish } from '../../reducers/modalsReducer'

const Cart = () => {
  const modalState = useAppSelector((state) => state.modals)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const clickHandle = () => {
    navigate('/store')
    dispatch(setIsOpenForm(false))
        dispatch(setOpenOrderFinish(false))
  }

  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__header">
          <div onClick={clickHandle} className="cart__close close">
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
