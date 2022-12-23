import { useEffect, useState } from 'react'
import './SortItem.scss'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { FilterItemState } from '../../../../app/types'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setFilterMultiply } from '../../../../reducers/filterReducer'


const SortItem = ({ filters, title }: FilterItemState) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()
  const filtersState = useAppSelector((state) => state.filters.multiply[title as keyof typeof state.filters.multiply])

  useEffect(() => {
    const newParams =  filters.map((e) => {
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
    const values = filtersState.map((e) => {
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
        {filtersState.map((filter) => {
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
                (<span>1</span>/<span>5</span>)
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SortItem
