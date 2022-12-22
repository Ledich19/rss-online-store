import './Cart.scss'
import { AiOutlineInbox } from 'react-icons/ai'
import OrderForm from './OrderForm/OrderForm'
import DataForm from './DataForm/DataForm'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import OrderFinish from './OrderFinish/OrderFinish'
import CartFooter from './CartFooter/CartFooter'
import { useNavigate } from 'react-router-dom'
import { setIsOpenForm, setOpenOrderFinish } from '../../reducers/modalsReducer'
import { useState, useEffect } from 'react'
import { AiOutlineCaretLeft } from 'react-icons/ai'
import { AiOutlineCaretRight } from 'react-icons/ai'

const Cart = () => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(0)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const modalState = useAppSelector((state) => state.modals)
  const cartContent = useAppSelector((state) => state.cart)
  const showCartContent =
    limit === 0 ? cartContent : cartContent.slice(page * limit, page * limit + limit)
  useEffect(() => {
    const paginationCartJSON = window.localStorage.getItem('paginationCart')
    console.log(paginationCartJSON);
    
    if (paginationCartJSON) {
      const paginationCart = JSON.parse(paginationCartJSON)
      setPage(paginationCart.page)
      setLimit(paginationCart.limit)
    }
  }, [])

  useEffect(() => {
    const length = limit === 0 ? 1 : Math.ceil(cartContent.length / limit)
    if (page + 1 > length) {
      setPage(length - 1)
    }
    navigate(`/cart?page=${page + 1}&limit=${limit}`)

  }, [cartContent.length, limit, page])

  const clickHandle = () => {
    navigate('/store')
    dispatch(setIsOpenForm(false))
    dispatch(setOpenOrderFinish(false))
  }

  const handleLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setLimit(value)
    window.localStorage.setItem('paginationCart', JSON.stringify({ page: page, limit: limit }))

  }
  const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (page !== 0) {
      const newPage = page - 1
      setPage(newPage)
      window.localStorage.setItem('paginationCart', JSON.stringify({ page: newPage, limit: limit }))
    }
  }
  const handleNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (page + 1 !== Math.ceil(cartContent.length / limit) && limit !== 0) {
      const newPage = page + 1
      setPage(newPage)
      window.localStorage.setItem('paginationCart', JSON.stringify({ page: newPage, limit: limit }))
    }
  }

  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__header">
          <div onClick={clickHandle} className="cart__close close">
            <span className="close__first"></span>
            <span className="close__second"></span>
          </div>
          <div className="cart__title">Your cart</div>
          {cartContent.length === 0 ? (
            <></>
          ) : (
            <>
              <input
                value={limit}
                onChange={handleLimit}
                type="number"
                min={0}
                max={99}
                className="cart__limit"
              />
              <div className="page">
                <div className="page__prev" onClick={handlePrev}>
                  <AiOutlineCaretLeft />
                </div>
                <div className="page__value">
                  {page + 1} from {limit === 0 ? 1 : Math.ceil(cartContent.length / limit)}
                </div>
                <div className="page__next" onClick={handleNext}>
                  <AiOutlineCaretRight />
                </div>
              </div>
            </>
          )}

          <div className="cart__icon">
            <AiOutlineInbox size="25px" />
          </div>
        </div>
        {modalState.isOderFinish ? (
          <OrderFinish />
        ) : modalState.isForm ? (
          <DataForm />
        ) : (
          <OrderForm showCartContent={showCartContent} />
        )}

        <CartFooter />
      </div>
    </div>
  )
}

export default Cart
