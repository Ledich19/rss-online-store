import './OrderForm.scss'

import ItemCart from '../ItemCart/ItemCart'
import { useAppSelector } from '../../../app/hooks'

const OrderForm = () => {
  const cartContent = useAppSelector((state) => state.cart)

  return (
    <div className="cart__body">
      {cartContent.map((product) => {
        return (
          <ItemCart
            key={product.id}
            id={product.id}
            name={product.title}
            color={product.color}
            size={product.size}
            photo={product.thumbnail}
            amount={product.amount}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default OrderForm
