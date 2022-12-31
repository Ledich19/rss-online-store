import { useEffect, useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { FilterItemState } from '../../../../app/types'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setFilterMultiply } from '../../../../reducers/filterReducer'
import './SortItem.scss'
import useGetFiltersProducts from '../../../../hooks/useGetFiltersProducts'

const SortItem = ({ filters, title }: FilterItemState) => {
  const dispatch = useAppDispatch()
  const getProducts = useGetFiltersProducts()
  const [visible, setVisible] = useState(false)

  const filtersState = useAppSelector((state) =>
    state.filters.multiply.find((f) => f.name === title)
  )
  const filtersOption = filtersState ? filtersState.value : []
  const productState = useAppSelector((state) => state.products)

  const showProduct = getProducts()

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const { value } = target
    const values = filtersOption.map((e) => {
      if (e.option === value) {
        return {
          option: e.option,
          isCheck: !e.isCheck,
        }
      }
      return e
    })
    dispatch(
      setFilterMultiply({
        key: title,
        params: values,
      })
    )
    window.localStorage.setItem(`filtersFor${title}`, JSON.stringify({
      key: title,
      params: values,
    }))
  }

  useEffect(() => {
    const filtersJSON = window.localStorage.getItem(`filtersFor${title}`)
    if (filtersJSON) {
      const filters = JSON.parse(filtersJSON)
      console.log(filters)
      dispatch(setFilterMultiply(filters))
    } else {
      const newParams = filters.map((e) => {
        return {
          option: e,
          isCheck: false,
        }
      })
      dispatch(
        setFilterMultiply({
          key: title,
          params: newParams,
        })
      )
    }
  }, [])

  return (
    <div className="sort-item">
      <div className="sort-item__title">
        <div className="sort-item__text">{title}</div>
        <div onClick={toggleVisible} className={`sort-item__btn ${visible ? '_active' : ''}`}>
          <p>{!visible ? <FaAngleDown /> : <FaAngleUp />}</p>
        </div>
      </div>

      <ul className={`sort-item__list ${visible ? '_active' : ''}`}>
        {filtersOption.map((filter) => {
          return (
            <li key={filter.option + title} className="sort-item__item">
              <label htmlFor="" className="sort-item__label">
                <input
                  checked={filter.isCheck}
                  onChange={handler}
                  value={filter.option}
                  type="checkbox"
                  className="sort-item__checkbox"
                  name={title}
                />
                {filter.option}
              </label>
              <div className="sort-item__amount">
                (
                <span>
                  {
                    showProduct.filter(
                      (product) => product[title as keyof typeof product] === filter.option
                    ).length
                  }
                </span>
                /
                <span>
                  {
                    productState.filter(
                      (product) => product[title as keyof typeof product] === filter.option
                    ).length
                  }
                </span>
                )
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SortItem
