import { createSlice } from '@reduxjs/toolkit'
import { Checkbox, FiltersState, Range } from '../app/types'

const initialState: FiltersState = {
  multiply: {
    "sex": [],
    "size": [],
    "brand": [],
    "color": [],
    "category": [],
  },
  ranges: {
    "rating": {min: 0, max: 100},
    "stock": {min: 0, max: 100},
    "price": {min: 0, max: 100},
  },
  "search": ''
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

    setFilterMultiply(state, action: {
      payload: {
          key: string,
          params: Checkbox[]
      }; type: string;
    }): FiltersState {
      const key = action.payload.key as keyof typeof state
      const newMultiply = {...state.multiply, [key]: action.payload.params}
      console.log(state.multiply);
        return {
          ...state, multiply: newMultiply
        }
    },

    setFilterRange(state, action: {
      payload: {
          key: string,
          params: Range
      }; type: string;
    }): FiltersState {
      const key = action.payload.key as keyof typeof state
      const newRanges = {...state.ranges, [key]: action.payload.params}
        return {
          ...state, ranges: newRanges
        }
    },

    removeFilter(state, action: {
      payload: {
        key: string;
        value: string;
      }; type: string;
    }): FiltersState {
      const key = action.payload.key as keyof typeof state
      const fild = state[key]

      if (Array.isArray(fild)) {
        console.log(state[key]);
        return {
          ...state, [key]: fild.filter((f) => f !== action.payload.value)
        }
      }
      return state
    },

    clearFilter(state, action: {
      payload: {
        key: string;
        value: string;
      }; type: string;
    }): FiltersState {
      const key = action.payload.key as keyof typeof state
      const fild = state[key]

      if (Array.isArray(fild)) {
        return {
          ...state, [key]: []
        }
      }
      return state
    }




  },


}
)

export const { setSearch, setFilterMultiply, removeFilter, clearFilter, setFilterRange } = filterSlice.actions
export default filterSlice.reducer


