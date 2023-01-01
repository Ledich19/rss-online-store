import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link, useSearchParams } from 'react-router-dom'

import PriceProductsInCart from '../../components/Cart/PriceProductsInCart/PriceProductsInCart'
import headerLogo from '../../images/logo.svg'
import { setFilterMultiply } from '../../reducers/filterReducer'
import './Header.scss'

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state)
  const filtersState = useAppSelector((state) =>
    state.filters.multiply.find((f) => f.name === 'human')
  )
  const filtersOption = filtersState ? filtersState.value : []

  const [isClicked, setIsClicked] = useState(false)
  const [fixedBurger, setFixedBurger] = useState('header__burger')

  const topSpan = !isClicked ? 'header__span' : 'header__span top-span'
  const middleSpan = !isClicked ? 'header__span' : 'header__span middle-span'
  const bottomSpan = !isClicked ? 'header__span' : 'header__span bottom-span'
  const navClass = isClicked ? 'header__navigation open' : 'header__navigation'

  const updateMenu = () => {
    if (!isClicked) {
      setIsClicked(true)
      setTimeout(() => {
        setFixedBurger('header__burger fixed-burger')
      }, 500)
    } else {
      setIsClicked(false)
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
        key: 'human',
        params: values,
      })
    )
  }

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/home" rel="stylesheet" className="header__picture">
          <img onClick={() =>  localStorage.clear()} src={headerLogo} alt="" className="header__logo" />
        </Link>
        <nav className={navClass}>
          <ul className="header__list">
            <Link rel="stylesheet" to="/home" className="header__link">
              Home
            </Link>
            <Link
              onClick={() => handleSetFilter('')}
              rel="stylesheet"
              to={`/store${ searchParams ? '?' : ''}${searchParams}`}
              className="header__link"
            >
              All
            </Link>
            <Link
              onClick={() => handleSetFilter('woman')}
              rel="stylesheet"
              to={`/store${ searchParams ? '?' : ''}${searchParams}`}
              className="header__link"
            >
              Woman
            </Link>
            <Link
              onClick={() => handleSetFilter('man')}
              rel="stylesheet"
              to={`/store${ searchParams ? '?' : ''}${searchParams}`}
              className="header__link"
            >
              Man
            </Link>
            <Link
              onClick={() => handleSetFilter('kids')}
              rel="stylesheet"
              to={`/store${ searchParams ? '?' : ''}${searchParams}`}
              className="header__link"
            >
              Kids
            </Link>
          </ul>
        </nav>
        <div onClick={updateMenu} className={fixedBurger}>
          <div className={topSpan}></div>
          <div className={middleSpan}></div>
          <div className={bottomSpan}></div>
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
