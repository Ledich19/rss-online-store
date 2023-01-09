import './Main.scss'

import { Routes, Route } from 'react-router-dom'
import Error404 from '../../components/Error404/Error404'
import Favorite from '../../components/Favorite/Favorite'
import Home from '../../components/Home/Home'
import Cart from '../../components/Cart/Cart'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import Store from '../../components/Store/Store'

const Main = () => {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<Store />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default Main
