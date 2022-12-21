import './CartFooter.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setIsOpenForm } from '../../../reducers/modalsReducer'
import Promo from '../Promo/Promo'

const CartFooter = () => {
  const cartContent = useAppSelector((state) => state.cart)
  const promoCodes = useAppSelector((state) => state.promoCodes)
  const isPromoCodes = promoCodes.promoCodeUse.length > 0 ? true : false

  const dispatch = useAppDispatch()
  const modalState = useAppSelector((state) => state.modals)

  const costCount = (): number => {
    const cost = cartContent.reduce((sum, product) => sum + product.amount * product.price, 0)
    const discount = isPromoCodes
      ? promoCodes.promoCodeUse.reduce((sum, code) => sum + code.discount, 0) / 100
      : 1
    return cost * discount
  }

  const handleOrderMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setIsOpenForm(true))
  }

  return (
    <div className="cart__footer">
      <div className="cart__cost">
        <span>ESTIMATE TOTAL</span>

        <span
          className="cart__price"
          style={{ textDecoration: isPromoCodes ? 'line-through' : 'none' }}
        >
          {cartContent.reduce((sum, product) => sum + product.amount * product.price, 0)}&euro;
        </span>
      </div>

      {isPromoCodes ? (
        <div className="cart__total">
          <span>NEW COST</span>
          <span className="cart__total-price">{costCount()}&euro;</span>
        </div>
      ) : (
        <></>
      )}

<Promo />

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
