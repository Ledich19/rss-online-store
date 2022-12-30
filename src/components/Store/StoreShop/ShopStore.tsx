import React, {useState, useEffect} from "react";
import Card from "./Card/Card";
import "./StoreShop.scss";
import useGetFiltersProducts from "../../../hooks/useGetFiltersProducts";
import { useSearchParams } from "react-router-dom";


const StoreShop = () => {
  const cards = document.querySelectorAll('.shop__card')
  const [searchParams, setSearchParams] = useSearchParams();
  const buttons = document.querySelectorAll('.shop__button');
  const changeToBig = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchParams({view: 'big'});
    cards.forEach(i => i.classList.remove('two'));
    localStorage.removeItem('view');
    buttons.forEach(i => i.classList.remove('active'))
    const button = e.target as HTMLElement
    button.classList.add('active');
  }
  const changeToSmall = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchParams({view: 'small'});
    cards.forEach(i => i.classList.add('two'));
    localStorage.setItem('view' , 'two');
    buttons.forEach(i => i.classList.remove('active'))
    const button = e.target as HTMLElement
    button.classList.add('active');
  }
  let buttonTwo = <button className="shop__button shop__button_two" onClick={changeToSmall}></button>;
  let buttonThree = <button className="shop__button shop__button_three active" onClick={changeToBig}></button>;
  const view = {flex:'1 1 30%'}
  if(!searchParams.get('view')){
    localStorage.removeItem('view');
    buttonTwo = <button className="shop__button shop__button_two" onClick={changeToSmall}></button>;
    buttonThree = <button className="shop__button shop__button_three active" onClick={changeToBig}></button>;
  }
  if (localStorage.getItem('view')){
    view.flex = '1 1 48%';
    buttonTwo = <button className="shop__button shop__button_two active" onClick={changeToSmall}></button>;
    buttonThree = <button className="shop__button shop__button_three" onClick={changeToBig}></button>;
  }
  const getProducts = useGetFiltersProducts()
  const showProduct = getProducts()

  return (
  <div className="store__shop shop" >
    <div className="shop__buttons">
      {buttonTwo}
      {buttonThree}
    </div >
    {showProduct.map((card) =><Card style={view} key={card.id} card={card} />)}

  </div>
  )
};

export default StoreShop;
