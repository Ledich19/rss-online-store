import { useAppSelector } from '../../../app/hooks'
import './PriceProductsInCart.scss'

const PriceProductsInCart = () => {
  const { cart, promoCodes } = useAppSelector((state) => state)
  const isPromoCodes = promoCodes.promoCodeUse.length > 0 ? true : false
  const isCartContent = cart.length > 0 ? true : false

  const costCount = (): string => {
    const cost = cart.reduce((sum, product) => sum + product.amount * product.price, 0)
    const discount = isPromoCodes
      ? promoCodes.promoCodeUse.reduce((sum, code) => sum + code.discount, 0) / 100
      : 1
    return (cost * (1 - discount)).toFixed(1)
  }

  return (
    <div className="cart-price__price-all">
      <div style={{ textDecoration: isPromoCodes && isCartContent ? 'line-through' : 'none' }}>
        {cart.reduce((sum, product) => sum + product.amount * product.price, 0)}&euro;
      </div>

      {isPromoCodes && isCartContent ? (
        <div className="cart-price__new-price">
          {costCount()}
          &euro;
        </div>
      ) : null}
    </div>
  )
}

export default PriceProductsInCart
