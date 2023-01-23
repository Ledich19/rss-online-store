import React from "react";
import "./Store.scss";
import StoreFilters from "./StoreFilters/StoreFilters";
import StoreShop from "./StoreShop/ShopStore";

const Store = () => {
  return (
  <div className="store">
  <StoreFilters/>
  <StoreShop/>
  </div>)
};

export default Store;
