import './CartFooter.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setIsOpenForm } from '../../../reducers/modalsReducer'
import Promo from '../Promo/Promo'

const CartFooter = () => {
  const dispatch = useAppDispatch()
  const { modals } = useAppSelector((state) => state)

  const handleOrderMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setIsOpenForm(true))
  }
  const handleBeak = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setIsOpenForm(false))
  }

  return (
    <div className="cart__footer">
      <Promo />
      {modals.isOderFinish ? (
        <></>
      ) : modals.isForm ? (
        <div className="cart__button" onClick={handleBeak}>
          BACK TO CART
        </div>
      ) : (
        <div className="cart__button" onClick={handleOrderMenu}>
          MAKE A PURCHASE
        </div>
      )}
    </div>
  )
}

export default CartFooter
