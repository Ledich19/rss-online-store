import { createSlice } from '@reduxjs/toolkit'
import { CartState, ProductInCart } from '../app/types'

const initialState: CartState = [
  {
    amount: 0,
    id: 'id',
    size: 'L',
    sex: "woman",
    brand: 'string',
    color: 'string',
    price: 555,
    title: 'string',
    images: [],
    rating: 'string',
    category: 'string',
    createdAt: 'string',
    thumbnail: 'string',
    description: 'string',
    discountPercentage: 20
  }
]

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
    },

    plusAmount(state, action: {
      payload: string;
    }) {
      return state.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount + 1, }
        }
        return product

      })
    },

    minusAmount(state, action: {
      payload: string;
    }) {
      return state.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount - 1, }
        }
        return product

      })
    },

  },


}
)

export const { addProductToCart, removeProductFromCart,minusAmount, plusAmount} = cartSlice.actions
export default cartSlice.reducer