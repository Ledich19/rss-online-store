import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addPromoCode, removePromoCode } from '../../../reducers/promoReducer'
import './Promo.scss'

const Promo = () => {
  const dispatch = useAppDispatch()
  const [promoCode, setPromoCode] = useState('')
  const [isAddBtnDisable, setIsAddBtnDisable] = useState(true)

  const { promoCodeUse, promoCodes } = useAppSelector((state) => state.promoCodes)
  const { isOderFinish, isForm } = useAppSelector((state) => state.modals)

  const deletePromoHandler = (code: string) => {
    dispatch(removePromoCode(code))
  }

  const writePromoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value
    if (promoCodes.find((code) => code.code === value)) {
      setIsAddBtnDisable(false)
    }
    setPromoCode(value)
  }

  const addPromoHandler = () => {
    dispatch(addPromoCode(promoCode))
    setIsAddBtnDisable(true)
    setPromoCode('')
  }

  return (
    <>
      {!isOderFinish && !isForm ? (
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
              disabled={isAddBtnDisable}
              value="ADD"
              title="add promo code"
            />
          </label>

          <div className="promo-codes__use">
            {promoCodeUse.map((code) => {
              return (
                <span key={code.code} className="promo-codes__use-item">
                  <span
                    data-tooltip={`${code.discount.toString()}%`}
                    className="promo-codes__promo-text"
                  >
                    {' '}
                    {code.code}
                  </span>
                  <span
                    data-tooltip="delete"
                    className="promo-codes__remove"
                    onClick={() => {
                      deletePromoHandler(code.code)
                    }}
                  >
                    &times;
                  </span>
                </span>
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Promo
