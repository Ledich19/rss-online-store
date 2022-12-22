import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addPromocode, remuvePromoCode } from '../../../reducers/promoReducer'
import './Promo.scss'

const Promo = () => {
  const [promoCode, setPromoCode] = useState('')

  const { promoCodeUse } = useAppSelector((state) => state.promoCodes)
  const dispatch = useAppDispatch()

  const deletePromoHandler = (code: string) => {
    dispatch(remuvePromoCode(code))
  }
  const writePromoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value
    setPromoCode(value)
  }

  const addPromoHandler = () => {
    dispatch(addPromocode(promoCode))
    setPromoCode('')
  }

  return (
    <div className="promo-codes">
      <label className="promo-codes__promo" htmlFor="">
        <input
          value={promoCode}
          onChange={writePromoHandler}
          type="text"
          className="promo-codes__promo-write"
          placeholder="PROMO CODE"
        />
        <input
          onClick={addPromoHandler}
          type="button"
          className="promo-codes__promo-add"
          value="ADD"
        />
      </label>

      <div className="promo-codes__use">
        {promoCodeUse.map((code) => {
          return (
            <span
              onClick={() => {
                deletePromoHandler(code.code)
              }}
              className="promo-codes__use-item"
              key={code.code}
            >
              {' '}
              {code.code}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Promo
