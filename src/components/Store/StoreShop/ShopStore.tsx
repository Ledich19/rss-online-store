import React, { useEffect } from 'react'
import Card from './Card/Card'
import './StoreShop.scss'
import useGetFiltersProducts from '../../../hooks/useGetFiltersProducts'
import { useAppDispatch } from '../../../app/hooks'
import { setSortView } from '../../../reducers/filterReducer'
import { ViewType } from '../../../app/types'

const StoreShop = () => {
  const dispatch = useAppDispatch()
  const showProduct = useGetFiltersProducts()
  //const showProduct = getProducts()

  const cards = document.querySelectorAll('.shop__card')
  const buttons = document.querySelectorAll('.shop__button')

  useEffect(() => {
    const viewJSON = window.localStorage.getItem('view')
    if (viewJSON) {
      dispatch(setSortView(viewJSON as ViewType))
    }
  }, [])

  const changeToBig = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setSortView('big'))
    cards.forEach((i) => i.classList.remove('two'))
    localStorage.setItem('view', 'big')
    buttons.forEach((i) => i.classList.remove('active'))
    const button = e.target as HTMLElement
    button.classList.add('active')
  }
  const changeToSmall = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(setSortView('small'))
    cards.forEach((i) => i.classList.add('two'))
    localStorage.setItem('view', 'small')
    buttons.forEach((i) => i.classList.remove('active'))
    const button = e.target as HTMLElement
    button.classList.add('active')
  }

  let buttonTwo = (
    <button className="shop__button shop__button_two" onClick={changeToSmall}></button>
  )
  let buttonThree = (
    <button className="shop__button shop__button_three active" onClick={changeToBig}></button>
  )
  const view = { flex: '1 1 30%' }
  if (localStorage.getItem('view') === 'big' || localStorage.getItem('view') === undefined) {
    buttonTwo = <button className="shop__button shop__button_two" onClick={changeToSmall}></button>
    buttonThree = (
      <button className="shop__button shop__button_three active" onClick={changeToBig}></button>
    )
  }
  if (localStorage.getItem('view') === 'small') {
    view.flex = '1 1 48%'
    buttonTwo = (
      <button className="shop__button shop__button_two active" onClick={changeToSmall}></button>
    )
    buttonThree = (
      <button className="shop__button shop__button_three" onClick={changeToBig}></button>
    )
  }

  return (
    <div className="store__shop shop">
      <div className="shop__buttons">
        {buttonTwo}
        {buttonThree}
      </div>
      {showProduct.map((card) => (
        <Card style={view} key={card.id} card={card} />
      ))}
    </div>
  )
}

export default StoreShop
