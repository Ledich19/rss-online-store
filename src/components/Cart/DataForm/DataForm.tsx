import './DataForm.scss'
import { useState } from 'react'
import visa from '../../../images/pay-siatem/visa.png'
import mastercard from '../../../images/pay-siatem/mastercard.png'
import maestro from '../../../images/pay-siatem/maestro.png'
import jsb from '../../../images/pay-siatem/jcb.png'


const DataForm = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardValid, setCardValid] = useState('')
  const [cardCvv, setCardCvv] = useState('')

  let card = ''
  if (cardNum[0] <= '2') {
    card = visa
  } else if (cardNum[0] <= '5') {
    card = mastercard
  } else if (cardNum[0] <= '7') {
    card = maestro
  } else if (cardNum[0] <= '9') {
    card = jsb
  }

  const handleCartNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (cardNum.length < 16) {
      const value = e.target.value
      setCardNum(value)
    }
  }
  const handleCartValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let value = e.target.value
    if (
      !Number.isNaN(parseInt(value[value.length - 1], 10)) ||
      value[value.length - 1] === '/' ||
      value[value.length - 1] === undefined
    ) {
      if (cardValid.length === 1 && cardValid.length < value.length) {
        value = `${e.target.value}/`
      }
      setCardValid(value)
    }
  }
  const handleCartCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cardCvv.length < 3) {
      const value = e.target.value
      setCardCvv(value)
    }
  }

  return (
    <form className="order">
      <div className="order__address">
        <input className="order__address-item" type="text" placeholder="Name" />
        <input className="order__address-item" type="text" placeholder="Surname" />
        <input className="order__address-item" type="text" placeholder="Region" />
        <input className="order__address-item" type="tel" placeholder="Phone Number" />
        <input className="order__address-item" type="email" placeholder="Email" />
        <input className="order__address-item" type="text" placeholder="Postcode" />
        <input className="order__address-item" type="text" placeholder="City" />
        <input className="order__address-item" type="text" placeholder="Address" />
      </div>
      <div className="order__card card" style={{ backgroundImage: `url(${card})` }}>
        <input
          onChange={handleCartNumber}
          value={cardNum}
          type="number"
          className="card__number"
          placeholder="number"
        ></input>

        <div className="card__box">
          <input
            maxLength={5}
            onChange={handleCartValid}
            value={cardValid}
            type="text"
            className="card__valid"
            placeholder="valid"
          ></input>
          <input
            onChange={handleCartCvv}
            value={cardCvv}
            type="number"
            className="card__cv"
            placeholder="cvv"
          ></input>
        </div>
      </div>
      <button className="card__order-btn">Order</button>
    </form>
  )
}

export default DataForm
