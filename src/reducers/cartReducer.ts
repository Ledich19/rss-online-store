import { createSlice } from '@reduxjs/toolkit'
import { CartState, ProductInCart } from '../app/types'

const initialState: CartState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: {
      payload: ProductInCart; type: string;
    }): CartState {
      return state.concat(action.payload)
    },

    removeProductFromCart(state, action: {
      payload: string;
    }): CartState {
      return state.filter((product) => product.id !== action.payload)

    }
  },
}
)

export const { addProductToCart, removeProductFromCart } = cartSlice.actions
export default cartSlice.reducer