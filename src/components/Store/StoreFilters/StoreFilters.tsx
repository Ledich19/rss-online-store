import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import SortItem from './SortItem/SortItem'
import './StoreFilters.scss'

function unique<T>(arr: T[]): T[] {
  const result: T[] = []

  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str)
    }
  }

  return result
}

const StoreFilters = () => {
  const productsState = useAppSelector((state) => state.products)
  const sizes = ['XS', 'S', 'M', 'L', 'Xl', 'XXl', '3XL']
  const brands = unique(productsState.map((p) => p.brand))
  const categorys = unique(productsState.map((p) => p.category))

  return (
    <div className="store__filters filters">
      <SortItem filters={['man', 'wuman', 'kids']} title="sex" />
      <SortItem filters={sizes} title="size" />
      <SortItem filters={brands} title="brand" />
      <SortItem filters={categorys} title="category" />
    </div>
  )
}

export default StoreFilters
