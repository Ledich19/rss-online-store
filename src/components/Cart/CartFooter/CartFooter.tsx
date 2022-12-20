import './CartFooter.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setIsOpenForm } from '../../../reducers/modalsReducer'

const CartFooter = () => {
  const cartContent = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const modalState = useAppSelector((state) => state.modals)

  const handleOrderMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setIsOpenForm(true))
  }

  return (
    <div className="cart__footer">
      <div className="cart__cost">
        <span>Shipping cost</span>
        <span className="cart__price">40.00&euro;</span>
      </div>
      <div className="cart__total">
        <span>ESTIMATE TOTAL</span>
        <span className="cart__total-price">61.90&euro;</span>
      </div>

      {!modalState.isOderFinish && !modalState.isForm ? (
        <div className="cart__button" onClick={handleOrderMenu}>
          GO TO THE SHOPPING MARKET
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CartFooter
