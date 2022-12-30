import './App.css'
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer'
import Main from './Modules/Main/Main'
import { useEffect } from 'react'
import { useAppDispatch } from './app/hooks'
import { addProductToCart, clearCart } from './reducers/cartReducer'
import { ProductInCart } from './app/types'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const shoppingCartContentsJSON = window.localStorage.getItem('shoppingCartContents')
    if (shoppingCartContentsJSON) {
      console.log();
      
      const shoppingCartContents = JSON.parse(shoppingCartContentsJSON)
      dispatch(clearCart())
      shoppingCartContents.forEach((product: ProductInCart) => {
        dispatch(addProductToCart(product))
      })
    }
  }, [])

  // window.localStorage.setItem(
  //   'shoppingCartContents', JSON.stringify(cart)
  // )
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
