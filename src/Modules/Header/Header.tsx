import {useState} from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import "./Header.scss";




const Header = () => {
  const [navClass, setNavClass] = useState('header__navigation');
  const [isClicked, setIsClicked] = useState(false);
  const [styleTopSpan, setStyleTopSpan] = useState('header__span');
  const [styleMiddleSpan, setStyleMiddleSpan] = useState('header__span');
  const [styleBottomSpan, setStyleBottomSpan] = useState('header__span');
  const [fixedBurger,setFixedBurger] = useState('header__burger');

  const updateMenu = () =>{
    if(!isClicked){
      setNavClass('header__navigation open');
      setIsClicked(true);
      setStyleTopSpan('header__span top-span');
      setStyleMiddleSpan('header__span middle-span');
      setStyleBottomSpan('header__span bottom-span');
      setTimeout(()=>{
        setFixedBurger('header__burger fixed-burger');
      },500);

    } else{
      setNavClass('header__navigation');
      setIsClicked(false);
      setStyleTopSpan('header__span');
      setStyleMiddleSpan('header__span');
      setStyleBottomSpan('header__span');
      setFixedBurger('header__burger');
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
            <li className="header__item">
              <a href="#" className="header__link">New</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">Woman</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">Man</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">Kids</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">Home</a>
            </li>
          </ul>
        </nav>
        <div  onClick={updateMenu} className={fixedBurger}>
            <div className={styleTopSpan}></div>
            <div className={styleMiddleSpan}></div>
            <div className={styleBottomSpan}></div>
          </div>
        <div className="header__icons">
          <Link rel="stylesheet" to="/favorite" className="header__favorite" />
          <Link rel="stylesheet" to="/cart" className="header__cart" />
        </div>
      </div>
    </div>
    );
};

export default Header;
