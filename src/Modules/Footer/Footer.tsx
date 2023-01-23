import React from "react";
import footerLogo from "../../images/logo.svg"
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__content">
            <div className="footer__picture">
              <img src={footerLogo} alt="footer logo" className="footer__logo" />
            </div>
            <div className="footer__lists">
              <ul className="footer__list">
                <li className="footer__item">
                  <h4 className="footer__title-list">Help</h4>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Contact</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Check your order</a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <h4 className="footer__title-list">Legal</h4>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Legal notice</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Cookie policy</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Privacy policy</a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <h4 className="footer__title-list">Company</h4>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">About SILBON</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Sponsorships</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">CSR</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Work with us</a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <h4 className="footer__title-list">Information</h4>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Stores</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Delivers</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Returns</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Purchasing guide</a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">Payments</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__selects">
            <span className="footer__select">USD</span>
            <span className="footer__select">English</span>
          </div>
        </div>
      </div>
      <div className="footer__down">
          <div className="footer__down-container">
            <div className="footer__span">©2023 Silbon. All rights reserved.</div>
            <div className="footer__icons">
              <a href="https://github.com/pedanmax" title="max" rel="noreferrer" target="_blank" className="footer__social footer__social_alex"></a>
              <a href="https://github.com/Ledich19" title="alex" rel="noreferrer" target="_blank" className="footer__social footer__social_max"></a>
              <a href="https://rs.school/js/" rel="noreferrer" target="_blank" className="footer__social footer__social_rss"></a>
              <a href="#" target="_blank" className="footer__social footer__social_instagram"></a>
              <a href="#" target="_blank" className="footer__social footer__social_facebook"></a>
            </div>
          </div >
      </div>
    </div>
    );
};

export default Footer;
