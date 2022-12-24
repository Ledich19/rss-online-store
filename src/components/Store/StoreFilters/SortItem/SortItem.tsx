import { useEffect, useState } from 'react'
import './SortItem.scss'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { FilterItemState } from '../../../../app/types'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setFilterMultiply } from '../../../../reducers/filterReducer'

const SortItem = ({ filters, title }: FilterItemState) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()
  const filtersState = useAppSelector((state) =>
    state.filters.multiply.find((f) => f.name === title)
  )
  const filtersOption = filtersState ? filtersState.value : []
  console.log(filtersOption)

  const productState = useAppSelector((state) => state.products)
  const filtersStateMultiply = useAppSelector((state) => state.filters.multiply)
  const filtersStateRanges = useAppSelector((state) => state.filters.ranges)

  const showStateMultiply = productState.filter((product) => {
    const filters = filtersStateMultiply.every((rules) => {

      const value = rules.value.filter((r) => r.isCheck).map((r) => r.option)
      const ruleName = product[rules.name as keyof typeof product].toString()
      if (value.includes(ruleName) || value.length === 0) {
        return true
      }
      return false

    })
    return filters ? product : null
  })
  const showStateMultiplyRanmes = showStateMultiply.filter((product) => {
    const filters = filtersStateRanges.every((rule) => {
      const min = rule.value.min
      const max = rule.value.max
      const productValue = product[rule.name as keyof typeof product]

      if (productValue > min && productValue < max) {
        return true
      }
      return false

    })
    return filters ? product : null
  })
  console.log(showStateMultiplyRanmes)

  useEffect(() => {
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
  }, [])

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const isCheck = target.type === 'checkbox' ? target.checked : target.value
    const { name, value } = target
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
  }

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
                    showStateMultiplyRanmes.filter(
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
