import { useCallback, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setFilterRange } from '../../../../reducers/filterReducer'
import './SortRange.scss'

const SortRange = ({
  min,
  max,
  title,
  step,
}: {
  min: number
  max: number
  title: string
  step: number
}) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const filtersState = useAppSelector((state) => state.filters.ranges.find((f) => f.name === title))

  const minVal = filtersState && filtersState.value.min !== null ? filtersState.value.min : min
  const maxVal = filtersState && filtersState.value.max !== null ? filtersState.value.max : max

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  const setRangeParams = (minVal: number | null, maxVal: number | null, title: string) => {
    dispatch(
      setFilterRange({
        key: title,
        params: {
          min: minVal,
          max: maxVal,
        },
      })
    )
  }

  useEffect(() => {
    const filtersJSON = window.localStorage.getItem(`filtersFor${title}`)
    if (filtersJSON) {
      const filters = JSON.parse(filtersJSON)
      dispatch(setFilterRange(filters))
      maxValRef.current = filters.params.max
      minValRef.current = filters.params.min
    } else {
      setRangeParams(null, null, title)
      maxValRef.current = max
      minValRef.current = min
    }
  }, [])

  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)
    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  const handleLeftValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    const number = !isNaN(value) ? value : 0
    if (number < min) {
      setRangeParams(min, maxVal, title)
    } else if (number < maxVal) {
      setRangeParams(number, maxVal, title)
    } else {
      setRangeParams(maxVal - step, maxVal, title)
    }
  }
  const handleRightValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    const number = !isNaN(value) ? value : 0
    if (number > max) {
      setRangeParams(minVal, max, title)
    } else if (minVal < number) {
      setRangeParams(minVal, number, title)
    } else {
      setRangeParams(minVal, minVal + step, title)
    }
  }

  return (
    <div className="sort-range">
      <div className="value__wrapper">
        <input
          onChange={handleLeftValue}
          className="sort-range__left-value"
          type="text"
          value={minVal}
        />
        <div className="sort-range__title">{title}</div>
        <input
          onChange={handleRightValue}
          className="sort-range__right-value"
          type="text"
          value={maxVal}
        />
      </div>
      <div className="sort-range__wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          step={step}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - step)
            setRangeParams(value, maxVal, title)

            window.localStorage.setItem(
              `filtersFor${title}`,
              JSON.stringify({
                key: title,
                params: {
                  min: value,
                  max: maxVal,
                },
              })
            )

            minValRef.current = value
          }}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          step={step}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + step)
            setRangeParams(minVal, value, title)

            window.localStorage.setItem(
              `filtersFor${title}`,
              JSON.stringify({
                key: title,
                params: {
                  min: minVal,
                  max: value,
                },
              })
            )

            maxValRef.current = value
          }}
          className="thumb thumb--right"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </div>
  )
}

export default SortRange
