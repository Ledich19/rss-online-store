import { createSlice } from '@reduxjs/toolkit'
import { CartState, ProductInCart } from '../app/types'

const initialState: CartState = [
]


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: {
      payload: ProductInCart; type: string;
    }): CartState {
      const newState = state.concat(action.payload)
      return newState
    },

    removeProductFromCart(state, action: {
      payload: string;
    }): CartState {
      const newState = state.filter((product) => product.id !== action.payload)
      return newState
    },

    clearCart(): CartState {
      window.localStorage.removeItem('shoppingCartContents')
      return []
    },

    plusAmount(state, action: {
      payload: string;
    }) {

      const newState = state.map((product) => {
        if (product.id === action.payload && product.amount !== product.amountAll) {
          return { ...product, amount: product.amount + 1, }
        }
        return product
      })
      return newState
    },

    minusAmount(state, action: {
      payload: string;
    }) {
      const newState = state.map((product) => {
        if (product.id === action.payload && product.amount !== 0) {
          return { ...product, amount: product.amount - 1, }
        }
        return product
      }).filter(product => product.amount !== 0)

      return newState
    },
  },
}
)

export const { addProductToCart, removeProductFromCart, minusAmount, plusAmount, clearCart } = cartSlice.actions
export default cartSlice.reducer