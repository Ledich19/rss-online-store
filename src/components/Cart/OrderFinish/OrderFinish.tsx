import './OrderFinish.scss'


import { useAppSelector } from '../../../app/hooks'

const OrderFinish = () => {
  const cartContent = useAppSelector((state) => state.cart)

  return (
    <div className="order-finis">
      <div className="order-finis__bold">Congratulations!</div>
      The order has been successfully completed Soon a letter with detailed information will be sent
      to the specified mail.
      <div className="order-finis__bold">Your order number #9898</div>
    </div>
  )
}

export default OrderFinish
