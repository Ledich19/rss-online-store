import React from "react";
import Card from "./Card/Card";
import "./StoreShop.scss";
import useGetFiltersProducts from "../../../hooks/useGetFiltersProducts";

const StoreShop = () => {

  const getProducts = useGetFiltersProducts()
  const showProduct = getProducts()

  return (
  <div className="store__shop shop">
    {showProduct.map((card) =><Card key={card.id} card={card} />)}
  </div>
  )
};

export default StoreShop;
