import { useAppSelector } from '../../../app/hooks'
import SortItem from './SortItem/SortItem'
import SortRange from './SortRange/SortRange'
import './StoreFilters.scss'
import Search from './SearchInput/Search'
import SortBy from './SortBy/SortBy'

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
  const { products } = useAppSelector((state) => state)
  
  const brands = unique(products.map((p) => p.brand))
  const categories = unique(products.map((p) => p.category))
  const human = unique(products.map((p) => p.human))

  return (
    <div className="store__filters filters">
      <SortBy/>
      <Search/>
      <SortItem filters={human} title="human" />
      <SortItem filters={categories} title="category" />
      <SortItem filters={brands} title="brand" />
      <SortRange min={1} max={5000} step={1} title="price" />
      <SortRange min={1} max={5} step={0.1} title="rating" />
    </div>
  )
}

export default StoreFilters
