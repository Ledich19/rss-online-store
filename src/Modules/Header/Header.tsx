import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'

import PriceProductsInCart from '../../components/Cart/PriceProductsInCart/PriceProductsInCart'
import headerLogo from '../../images/logo.svg'
import { setFilterMultiply } from '../../reducers/filterReducer'
import './Header.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state)
  const filtersState = useAppSelector((state) =>
    state.filters.multiply.find((f) => f.name === 'sex')
  )
  const filtersOption = filtersState ? filtersState.value : []

  const [navClass, setNavClass] = useState('header__navigation')
  const [isClicked, setIsClicked] = useState(false)
  const [styleTopSpan, setStyleTopSpan] = useState('header__span')
  const [styleMiddleSpan, setStyleMiddleSpan] = useState('header__span')
  const [styleBottomSpan, setStyleBottomSpan] = useState('header__span')
  const [fixedBurger, setFixedBurger] = useState('header__burger')

  const updateMenu = () => {
    if (!isClicked) {
      setNavClass('header__navigation open')
      setIsClicked(true)
      setStyleTopSpan('header__span top-span')
      setStyleMiddleSpan('header__span middle-span')
      setStyleBottomSpan('header__span bottom-span')
      setTimeout(() => {
        setFixedBurger('header__burger fixed-burger')
      }, 500)
    } else {
      setNavClass('header__navigation')
      setIsClicked(false)
      setStyleTopSpan('header__span')
      setStyleMiddleSpan('header__span')
      setStyleBottomSpan('header__span')
      setFixedBurger('header__burger')
    }
  }

  const handleSetFilter = (humanType: string) => {
    const values = filtersOption.map((e) => {
      if (e.option === humanType) {
        return {
          option: e.option,
          isCheck: true,
        }
      } else {
        return {
          option: e.option,
          isCheck: false,
        }
      }
    })
    dispatch(
      setFilterMultiply({
        key: 'sex',
        params: values,
      })
    )
  }

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" rel="stylesheet" className="header__picture">
          <img src={headerLogo} alt="" className="header__logo" />
        </Link>
        <nav className={navClass}>
          <ul className="header__list">
            <Link
              onClick={() => handleSetFilter('')}
              rel="stylesheet"
              to="/store"
              className="header__link"
            >
              All
            </Link>
            <Link
              onClick={() => handleSetFilter('woman')}
              rel="stylesheet"
              to="/store"
              className="header__link"
            >
              Woman
            </Link>
            <Link
              onClick={() => handleSetFilter('man')}
              rel="stylesheet"
              to="/store"
              className="header__link"
            >
              Man
            </Link>
            <Link
              onClick={() => handleSetFilter('kids')}
              rel="stylesheet"
              to="/store"
              className="header__link"
            >
              Kids
            </Link>
            <Link rel="stylesheet" to="/store" className="header__link">
              Home
            </Link>
          </ul>
        </nav>
        <div onClick={updateMenu} className={fixedBurger}>
          <div className={styleTopSpan}></div>
          <div className={styleMiddleSpan}></div>
          <div className={styleBottomSpan}></div>
        </div>
        <div className="header__icons">
          <PriceProductsInCart />
          <Link rel="stylesheet" to="/favorite" className="header__favorite" />
          <Link rel="stylesheet" to="/cart" className="header__cart">
            <div className="header__amount">
              <div></div>
              {cart.reduce((sum, product) => sum + product.amount, 0)}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
