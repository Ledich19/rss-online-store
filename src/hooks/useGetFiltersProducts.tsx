import { useAppSelector } from '../app/hooks'
import { ProductInDb, ProductsState } from '../app/types'
import React, { useEffect, useState } from 'react'


const useGetFiltersProducts = () => {
  const productState = useAppSelector((state) => state.products)
  const { isSortDESC, sortBy, search, multiply, ranges } = useAppSelector((state) => state.filters)
  const { products } = useAppSelector((state) => state)
  const [value, setValue] = useState<ProductInDb[]>(products)
  
  useEffect(() => {
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
        if (min === null && max === null) {
          return true
        } else if (min !== null && max !== null && productValue > min && productValue < max) {
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
      const sortFields = [
        'human',
        'brand',
        'price',
        'title',
        'rating',
        'category',
        'description',
        'discountPercentage',
      ]
      const result = sortFields.some((field) => {
        const researchProduct = product[field as keyof typeof product]
        // if (typeof researchProduct === 'string') {
          return researchProduct.toString().toUpperCase().includes(search.toUpperCase())
        // }
      })
      return result ? product : null
    })
    setValue(sortProductSearch)
  }, [isSortDESC, sortBy, search, multiply, ranges])
  
  return value

}
export default useGetFiltersProducts
