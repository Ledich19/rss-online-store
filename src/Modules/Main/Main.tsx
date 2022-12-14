import React from "react";
import "./Main.css";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Error404 from "../../components/Error404/Error404";
import Favorite from "../../components/Favorite/Favorite";
import Home from "../../components/Home/Home";
import Cart from "../../components/Cart/Cart";
import Modal from "../../components/Modal/Modal";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Store from "../../components/Store/Store";

const Main = () => {
  return (
    <div className="Main">
      <Link className="App-link" to="/">
        home
      </Link>
      <Link className="App-link" to="/error404">
        error404
      </Link>
      <Link className="App-link" to="/favorite">
        favorite
      </Link>
      <Link className="App-link" to="/cart">
        cart
      </Link>
      <Link className="App-link" to="/modal">
        modal
      </Link>
      <Link className="App-link" to="/product/25">
        product
      </Link>
      <Link className="App-link" to="/store">
        store
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default Main;
