import { useAppSelector } from '../../../app/hooks'
import SortItem from './SortItem/SortItem'
import SortRange from './SortRange/SortRange'
import './StoreFilters.scss'
import Search from './SearchInput/Search'
import SortBy from './SortBy/SortBy'
import useGetFiltersProducts from '../../../hooks/useGetFiltersProducts'

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
  const showProduct = useGetFiltersProducts()
  const brands = unique(products.map((p) => p.brand))
  const categories = unique(products.map((p) => p.category))
  const human = unique(products.map((p) => p.human))
  const price = unique(products.map((p) => p.price).sort((a,b) => a - b))
  const rating = unique(products.map((p) => p.rating).sort())

  return (
    <div className="store__filters filters">
       <div className="filters__find">products found:{showProduct.length}</div>
      <SortBy />
      <Search />
      <SortItem filters={human} title="human" />
      <SortItem filters={categories} title="category" />
      <SortItem filters={brands} title="brand" />
      <SortRange
        min={price[0]}
        max={price[price.length - 1]}
        step={1}
        title="price"
      />
      <SortRange
        min={parseInt(rating[0])}
        max={parseInt(rating[rating.length - 1])}
        step={0.1}
        title="rating"
      />
    </div>
  )
}

export default StoreFilters
