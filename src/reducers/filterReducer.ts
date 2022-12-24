import { createSlice } from '@reduxjs/toolkit'
import { Checkbox, FiltersState, Range, RangeValue } from '../app/types'

const initialState: FiltersState = {
  multiply: [
    {
      name: "sex",
      value: []
    },
    {
      name: "category",
      value: []
    },
    {
      name: "brand",
      value: []
    }
    //TODO Поки робимо тільки верхні
    //"size": [],
    //"color": [], 
  ]
  ,
  ranges: [
    {
      name: "price",
      value: { min: 0, max: 0 }
    },
    {
      name: "rating",
      value: { min: 0, max: 0 }
    }
    //TODO Поки робимо тільки верхні
    //"stock": { min: 0, max: 100 },
  ],
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

      const isFilter = state.multiply.find((f) => f.name === action.payload.key)
      let newMultiply = state.multiply
      //const newMultiply = { ...state.multiply, [key]: action.payload.params }
      const newFilter = {
        name: action.payload.key,
        value: action.payload.params
      }
      
      if (isFilter) {
        newMultiply = state.multiply.map((f) => f.name === action.payload.key ? newFilter : f )
      } else {
        newMultiply = newMultiply.concat(newFilter)
      }

      return {
        ...state, multiply: newMultiply
      }
    },

    setFilterRange(state, action: {
      payload: {
        key: string,
        params: RangeValue
      }; type: string;
    }): FiltersState {
      const isFilter = state.ranges.find((f) => f.name === action.payload.key)
      let newRange = state.ranges
      const newFilter = {
        name: action.payload.key,
        value: action.payload.params
      }

      if (isFilter) {
        newRange = state.ranges.map((f) => f.name === action.payload.key ? newFilter : f )
      } else {
        newRange = newRange.concat(newFilter)
      }

      return {
        ...state, ranges: newRange
      }
      // const key = action.payload.key as keyof typeof state
      // const newRanges = { ...state.ranges, [key]: action.payload.params }
      // return {
      //   ...state, ranges: newRanges
      // }
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

export const { setSearch, setFilterMultiply, clearFilter, setFilterRange } = filterSlice.actions
export default filterSlice.reducer


