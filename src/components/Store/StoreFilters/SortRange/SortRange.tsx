import { useCallback, useEffect, useState, useRef } from 'react'
import './SortRange.scss'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { FilterItemState } from '../../../../app/types'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setFilterMultiply, setFilterRange } from '../../../../reducers/filterReducer'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'

const SortRange = ({ min, max, title }: { min: number; max: number; title: string }) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const filtersState = useAppSelector(
    (state) => state.filters.ranges[title as keyof typeof state.filters.ranges]
  )
  const minVal = filtersState.min
  const maxVal = filtersState.max

  const onChange = ({ min, max }: { min: number; max: number }) =>
    console.log(`min = ${min}, max = ${max}`)
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  const setRangeParams = (minVal: number, maxVal: number, title: string) => {
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

  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  useEffect(() => {
    setRangeParams(min, max, title)
  }, [])

  const handleLeftValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    const number = !isNaN(value) ? value : 0
    if (number < min) {
      setRangeParams(min, maxVal, title)
    } else if (number < maxVal) {
      setRangeParams(number, maxVal, title)
    } else {
      setRangeParams(maxVal - 1, maxVal, title)
    }
  }
  const handleRightValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    const number = !isNaN(value) ? value : 0
    if (number > max) {
      setRangeParams(minVal, max, title)
    } else if (minVal < number) {
      setRangeParams(minVal, number, title)
    } else {
      setRangeParams(minVal, minVal + 1, title)
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
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setRangeParams(value, maxVal, title)
            minValRef.current = value
          }}
          className="thumb thumb--left"
          //style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setRangeParams(minVal, value, title)
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
