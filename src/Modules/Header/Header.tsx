import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import headerLogo from '../../images/logo.svg'
import './Header.scss'

const Header = () => {
  const cartContent = useAppSelector((state) => state.cart)
  const promoCodes = useAppSelector((state) => state.promoCodes)
  const isPromoCodes = promoCodes.promoCodeUse.length > 0 ? true : false
  const discount = isPromoCodes
    ? promoCodes.promoCodeUse.reduce((sum, code) => sum + code.discount, 0) / 100
    : 1
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

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__picture">
          <img src={headerLogo} alt="" className="header__logo" />
        </div>
        <nav className={navClass}>
          <ul className="header__list">
            <Link rel="stylesheet" to="/store" className="header__link">
              New
            </Link>
            <Link rel="stylesheet" to="/store" className="header__link">
              Woman
            </Link>
            <Link rel="stylesheet" to="/store" className="header__link">
              Man
            </Link>
            <Link rel="stylesheet" to="/store" className="header__link">
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
          <div className="header__price-all">
            <div style={{ textDecoration: isPromoCodes ? 'line-through' : 'none' }}>
              {cartContent.reduce((sum, product) => sum + product.amount * product.price, 0)}&euro;
            </div>
            <div className="header__new-price">
              {cartContent.reduce((sum, product) => sum + product.amount * product.price, 0) *
                discount}
              &euro;
            </div>
          </div>
          <Link rel="stylesheet" to="/favorite" className="header__favorite" />
          <Link rel="stylesheet" to="/cart" className="header__cart">
            <div className="header__amount">
              <div></div>
              {cartContent.reduce((sum, product) => sum + product.amount, 0)}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
