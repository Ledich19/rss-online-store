import { useAppSelector } from '../../../app/hooks'
import './PriceProductsInCart.scss'

const PriceProductsInCart = () => {
  const cartContent = useAppSelector((state) => state.cart)
  const promoCodes = useAppSelector((state) => state.promoCodes)
  const isPromoCodes = promoCodes.promoCodeUse.length > 0 ? true : false
  const isCartContent = cartContent.length > 0 ? true : false

  const costCount = (): string => {
    const cost = cartContent.reduce((sum, product) => sum + product.amount * product.price, 0)
    const discount = isPromoCodes
      ? promoCodes.promoCodeUse.reduce((sum, code) => sum + code.discount, 0) / 100
      : 1
    return (cost * (1 - discount)).toFixed(2)
  }

  return (
    <div className="cart-price__price-all">

      <div style={{ textDecoration: (isPromoCodes && isCartContent) ? 'line-through' : 'none' }}>
        {cartContent.reduce((sum, product) => sum + product.amount * product.price, 0)}&euro;
      </div>

      {(isPromoCodes && isCartContent) ? (
        <div className="cart-price__new-price">
          {costCount()}
          &euro;
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PriceProductsInCart
