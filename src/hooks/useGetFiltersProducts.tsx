import { useAppSelector } from '../app/hooks'
import { ProductsState } from '../app/types'

const useGetFiltersProducts = () => {
  const productState = useAppSelector((state) => state.products)
  const { isSortDESC, sortBy, search, multiply, ranges } = useAppSelector((state) => state.filters)
  const getFilters = (): ProductsState => {
    const sortProductMultiply = productState.filter((product) => {
      const isProductValid = multiply.every((rule) => {
        const activeFilters = rule.value.filter((r) => r.isCheck).map((r) => r.option)
        const filterParam = product[rule.name as keyof typeof product].toString()
        if (activeFilters.includes(filterParam) || activeFilters.length === 0) {
          return true
        }
        return false
      })
      return isProductValid ? product : null
    })

    const sortProductRanges = sortProductMultiply.filter((product) => {
      const isProductValid = ranges.every((rule) => {
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

    const sortProductDirection = sortProductRanges.sort((productA, productB) => {
      const param = sortBy as keyof typeof productA
      const valueA = productA[param]
      const valueB = productB[param]
      if (valueA > valueB) {
        return !isSortDESC ? -1 : 1
      }
      if (valueA < valueB) {
        return !isSortDESC ? 1 : -1
      }
      return 0
    })

    const sortProductSearch = sortProductDirection.filter((product) => {
      const sortFelds = [
        'human',
        'brand',
        'price',
        'title',
        'rating',
        'category',
        'description',
        'discountPercentage',
      ]
      const result = sortFelds.some((feld) => {
        const researchProduct = product[feld as keyof typeof product]
        if (typeof researchProduct === 'string') {
          return researchProduct.toUpperCase().includes(search.toUpperCase())
        }
      })
      return result ? product : null
    })

    return sortProductSearch
  }

  return getFilters
}
export default useGetFiltersProducts
