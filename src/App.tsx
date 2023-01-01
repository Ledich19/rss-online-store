import './App.scss'
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer'
import Main from './Modules/Main/Main'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { addProductToCart } from './reducers/cartReducer'
import { ProductInCart } from './app/types'
import { useSearchParams } from 'react-router-dom'
import { setAllFilters } from './reducers/filterReducer'

function App() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { isSortDESC, sortBy, search, multiply, ranges } = useAppSelector((state) => state.filters)
  const { filters } = useAppSelector((state) => state)
  const { cart } = useAppSelector((state) => state)

  useEffect(() => {
    // const filtersForShopJSON = window.localStorage.getItem('filtersForShop')
    // if (filtersForShopJSON) {
    //   const filtersForShop = JSON.parse(filtersForShopJSON)
    //   console.log(filtersForShop);
    //   dispatch(setAllFilters(filtersForShop))
    // }

    const shoppingCartContentsJSON = window.localStorage.getItem('shoppingCartContents')
    if (shoppingCartContentsJSON) {
      console.log()

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
    const params = searchParams
    multiply.forEach((rule) => {
      const key = rule.name
      const value = rule.value.filter((r) => r.isCheck).map((r) => r.option)
      if (value.length > 0) {
        params.set(key, value.join('↕'))
      } else {
        params.delete(key)
      }
    })

    ranges.forEach((rule) => {
      const key = rule.name
      const value = [rule.value.min, rule.value.max]
      
      if (rule.value.min && rule.value.max ) {
        params.set(key, value.join('↕'))
      } else {
        params.delete(key)
      }
    })

    if (isSortDESC !== null && sortBy) {
      const param = isSortDESC ? 'DESC' : 'ASC'
      params.set('sort', [sortBy, param].join('-'))
    } else {
      params.delete('sort')
    }

    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
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
