import { createSlice } from '@reduxjs/toolkit'
import { FiltersState } from '../app/types'

const initialState: FiltersState = {
  sex: "woman",
  size: '',
  stock: '',
  brand: "Moncler",
  color: "#72736E",
  price: 2467,
  rating: "4.15",
  category: "sweter",
  search: '',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch(state, action: {
      payload: string; type: string;
    }): FiltersState {
      return { ...state, search: action.payload }
    },
    setFilter(state, action: {
      payload: {
        key: string;
        value: string;
      }; type: string;
    }): FiltersState {
      return {
        ...state, [action.payload.key]: action.payload.value
      }
    }
  },

}
)

export const { setSearch, setFilter } = filterSlice.actions
export default filterSlice.reducer


