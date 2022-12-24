import { useAppSelector } from '../app/hooks'
import { ProductsState } from '../app/types'

const useGetFiltersProducts = () => {
  const productState = useAppSelector((state) => state.products)
  const filtersStateMultiply = useAppSelector((state) => state.filters.multiply)
  const filtersStateRanges = useAppSelector((state) => state.filters.ranges)

  const getFilters = (): ProductsState => {
    const showStateMultiply = productState.filter((product) => {
      const isProductValid = filtersStateMultiply.every((rule) => {
        const activeFilters = rule.value.filter((r) => r.isCheck).map((r) => r.option)
        const filterParam = product[rule.name as keyof typeof product].toString()
        if (activeFilters.includes(filterParam) || activeFilters.length === 0) {
          return true
        }
        return false
      })
      return isProductValid ? product : null
    })

    const showStateMultiplyRanges = showStateMultiply.filter((product) => {
      const isProductValid = filtersStateRanges.every((rule) => {
        const min = rule.value.min
        const max = rule.value.max
        const productValue = product[rule.name as keyof typeof product]
        if (productValue > min && productValue < max) {
          return true
        }
        return false
      })
      return isProductValid ? product : null
    })

    return showStateMultiplyRanges
  }

  return getFilters
}
export default useGetFiltersProducts
