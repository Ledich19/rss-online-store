import './App.scss'
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer'
import Main from './Modules/Main/Main'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { addProductToCart } from './reducers/cartReducer'
import { ProductInCart } from './app/types'
import { useSearchParams } from 'react-router-dom'

function App() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { isSortDESC, sortBy, search, multiply, ranges } = useAppSelector((state) => state.filters)
  const { cart } = useAppSelector((state) => state)

  useEffect(() => {
    const shoppingCartContentsJSON = window.localStorage.getItem('shoppingCartContents')
    if (shoppingCartContentsJSON) {
      console.log();
      
      const shoppingCartContents = JSON.parse(shoppingCartContentsJSON)
      shoppingCartContents.forEach((product: ProductInCart) => {
        dispatch(addProductToCart(product))
      })
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('shoppingCartContents', JSON.stringify(cart))
    if (cart.length === 0) {
      window.localStorage.removeItem('shoppingCartContents')
    }
  }, [cart])

  useEffect(() => {
    const params = new URLSearchParams()
    multiply.forEach((rule) => {
      const key = rule.name
      const value = rule.value.filter((r) => r.isCheck).map((r) => r.option)
      if (value.length > 0) {
        params.append(key, value.join('↕'))
      }
    })

    ranges.forEach((rule) => {
      const key = rule.name
      const value = [rule.value.min, rule.value.max]
      params.append(key, value.join('↕'))
    })

    if (isSortDESC !== null && sortBy) {
      const param = isSortDESC ? 'DESC' : 'ASC'
      params.append('sort', [sortBy, param].join('-'))
    }
    if (search) {
      params.append('search', search)
    }
    setSearchParams(params)
  }, [isSortDESC, sortBy, search, multiply, ranges])

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
