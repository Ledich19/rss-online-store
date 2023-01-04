import './SortBy.scss'
import { setSortDirection, setSortBy } from '../../../../reducers/filterReducer'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { SortByType } from '../../../../app/types'

const SortBy = () => {
  const { sortBy } = useAppSelector((state) => state.filters)
  const { isSortDESC } = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('options')

  useEffect(() => {
    const sortOptionsJSON = window.localStorage.getItem('sortOptions')
    if (sortOptionsJSON) {
      console.log(sortOptionsJSON);
      const sortOptions = JSON.parse(sortOptionsJSON)
      dispatch(setSortBy(sortOptions.sortBy))
      dispatch(setSortDirection(sortOptions.sortDirection))
      setValue(sortOptions.value)
    }
  }, [])

  const showValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    
    let sortByValue = ''
    let directionValue = false;
    if (e.target.value === 'priceASC') {
      sortByValue = 'price'
      directionValue = true
    } else if (e.target.value === 'priceDESC') {
      sortByValue = 'price'
      directionValue = false
    } else if (e.target.value === 'ratingASC') {
      sortByValue = 'rating'
      directionValue = true
    } else if (e.target.value === 'ratingDESC') {
      sortByValue = 'rating'
      directionValue = false
    }
    dispatch(setSortBy(sortByValue as SortByType))
    dispatch(setSortDirection(directionValue))
    const values = { sortBy: sortByValue, sortDirection: directionValue, value: e.target.value}
    localStorage.setItem('sortOptions', JSON.stringify(values))
  }
  return (
    <div className="filters__sort sort">
      <select
        value={value}
        name="sort"
        id="sort"
        className="sort__select"
        onChange={showValue}
      >
        <option value="options" className="sort__option" disabled>
          Sort options
        </option>
        <option value="priceASC" className="sort__option">
          Sort by price ASC
        </option>
        <option value="priceDESC" className="sort__option">
          Sort by price DESC
        </option>
        <option value="ratingASC" className="sort__option">
          Sort by rating ASC
        </option>
        <option value="ratingDESC" className="sort__option">
          Sort by rating DESC
        </option>
      </select>
    </div>
  )
}

export default SortBy
