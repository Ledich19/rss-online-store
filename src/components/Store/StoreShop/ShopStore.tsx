import React from "react";
import Card from "./Card/Card";
import "./StoreShop.scss";
import { initialState } from "../../../reducers/productsReducer";


const StoreShop = () => {
  const products = initialState;
  console.log(products);
  
  return (

  <div className="store__shop shop">
    {products.map((card,index) => <Card key={card.id} index={index}/>)}
  </div>
  )
};

export default StoreShop;
