import { createSlice } from '@reduxjs/toolkit'
import { Checkbox, FiltersState, RangeValue, SortByType, ViewType } from '../app/types'

const initialState: FiltersState = {
  multiply: [
  ]
  ,
  ranges: [
  ],
  "isSortDESC": null,
  'sortBy': '',
  "search": '',
  'view': null
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAllFilters(state, action: {
      payload: FiltersState; type: string;
    }): FiltersState {
      return { ...state, isSortDESC: action.payload.isSortDESC, sortBy: action.payload.sortBy, search: action.payload.search, multiply: action.payload.multiply, ranges: action.payload.ranges, }
    },
    setSearch(state, action: {
      payload: string; type: string;
    }): FiltersState {
      return { ...state, search: action.payload }
    },
    setSortBy(state, action: {
      payload: SortByType; type: string;
    }): FiltersState {
      return { ...state, sortBy: action.payload }
    },
    setSortDirection(state, action: {
      payload: boolean; type: string;
    }): FiltersState {
      return { ...state, isSortDESC: action.payload }
    },
    setSortView(state, action: {
      payload: ViewType; type: string;
    }): FiltersState {
      return { ...state, view: action.payload }
    },

    setFilterMultiply(state, action: {
      payload: {
        key: string,
        params: Checkbox[]
      }; type: string;
    }): FiltersState {

      const isFilter = state.multiply.find((f) => f.name === action.payload.key)
      let newMultiply = state.multiply

      const newFilter = {
        name: action.payload.key,
        value: action.payload.params
      }

      if (isFilter) {
        newMultiply = state.multiply.map((f) => f.name === action.payload.key ? newFilter : f)
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
        newRange = state.ranges.map((f) => f.name === action.payload.key ? newFilter : f)
      } else {
        newRange = newRange.concat(newFilter)
      }

      return {
        ...state, ranges: newRange
      }

    },

  },
}
)

export const { setSearch, setFilterMultiply, setFilterRange, setSortDirection, setAllFilters, setSortView, setSortBy } = filterSlice.actions

export default filterSlice.reducer


