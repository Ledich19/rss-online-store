import './Cart.scss'
import OrderForm from './OrderForm/OrderForm'
import DataForm from './DataForm/DataForm'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import OrderFinish from './OrderFinish/OrderFinish'
import CartFooter from './CartFooter/CartFooter'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  setCartPage,
  setIsOpenForm,
  setLimit,
  setOpenOrderFinish,
} from '../../reducers/modalsReducer'
import { useEffect } from 'react'
import { AiOutlineCaretLeft } from 'react-icons/ai'
import { AiOutlineCaretRight } from 'react-icons/ai'
import PriceProductsInCart from './PriceProductsInCart/PriceProductsInCart'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { modals } = useAppSelector((state) => state)
  const { limit, page } = useAppSelector((state) => state.modals)
  const cartContent = useAppSelector((state) => state.cart)
  const [searchParams, setSearchParams] = useSearchParams()

  const showCartContent =
    limit === 0 ? cartContent : cartContent.slice(((page- 1) * limit) , ((page - 1) * limit + limit) )

  useEffect(() => {
    dispatch(setCartPage(1))
    const paginationCartJSON = window.localStorage.getItem('paginationCart')
    if (paginationCartJSON) {
      const paginationCart = JSON.parse(paginationCartJSON)
      dispatch(setLimit(paginationCart.limit))
      dispatch(setCartPage(paginationCart.page))
    }
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()
    params.append('page', (page).toString())
    params.append('limit', limit.toString())
    setSearchParams(params)

    const length = limit === 0 ? 1 : Math.ceil(cartContent.length / limit)
    if (page > length) {
      const newCartPage = length - 1 <= 1 ? 1 :  length - 1
      dispatch(setCartPage(newCartPage))
    }
  }, [cartContent.length, limit, page])
  
  useEffect(() => {
    window.localStorage.setItem('paginationCart', JSON.stringify({ limit, page }))
    if (modals.page === 1 && modals.limit=== 0) {
      window.localStorage.removeItem('paginationCart')
    }
  }, [limit, modals])

  const clickHandle = () => {
    navigate('/store')
    dispatch(setIsOpenForm(false))
    dispatch(setOpenOrderFinish(false))
  }

  const handleLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    dispatch(setLimit(value))
  }
  const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (page !== 1) {
      const newPage = page - 1      
      dispatch(setCartPage(newPage))
    }
  }
  const handleNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (page !== Math.ceil(cartContent.length / limit) && limit !== 0) {
      const newPage = page + 1
      dispatch(setCartPage(newPage))
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
                  {page} from {limit === 0? 1 : Math.ceil(cartContent.length / limit)}
                </div>
                <div className="page__next" onClick={handleNext}>
                  <AiOutlineCaretRight />
                </div>
              </div>
            </>
          )}

          <PriceProductsInCart />
        </div>
        {modals.isOderFinish ? (
          <OrderFinish />
        ) : modals.isForm ? (
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
