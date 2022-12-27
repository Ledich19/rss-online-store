import './OrderForm.scss'

import ItemCart from '../ItemCart/ItemCart'
import {CartState} from '../../../app/types'

const OrderForm = ({showCartContent}: {showCartContent: CartState}) => {

  return (
    <div className="cart__body">
      {showCartContent.map((product) => {
        return (
          <ItemCart
            key={product.id}
            id={product.id}
            title={product.title}
            brand={product.brand}
            category={product.category}
            color={product.color}
            size={product.size}
            photo={product.thumbnail}
            amount={product.amount}
            price={product.price}
            amountAll={product.amountAll}
          />
        )
      })}
    </div>
  )
}

export default OrderForm
