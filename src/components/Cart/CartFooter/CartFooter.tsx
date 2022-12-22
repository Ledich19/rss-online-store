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
      {!modalState.isOderFinish && !modalState.isForm ? (
        <>
          <Promo />
          <div className="cart__button" onClick={handleOrderMenu}>
            GO TO THE SHOPPING MARKET
          </div>
        </>
      ) : (
        <></>
      )}

      {!modalState.isOderFinish && modalState.isForm ? (
        <>
          <Promo />
          <div className="cart__button" onClick={handleBeak}>
            beack
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CartFooter
