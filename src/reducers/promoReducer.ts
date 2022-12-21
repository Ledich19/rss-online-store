import { createSlice } from '@reduxjs/toolkit'
import { PromoCodeState } from '../app/types'

const initialState: PromoCodeState = {
  promoCodes: [
    {
      code: 'RS',
      discount: 2
    },
    {
      code: 'EMP',
      discount: 5
    },
    {
      code: 'TEST',
      discount: 50
    },
  ],
  promoCodeUse: [
    {
      code: 'TEST',
      discount: 50
    },
    {
      code: 'EMP',
      discount: 5
    },
  ]
}

const promoCodeSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPromocode(state, action: {
      payload: string; type: string;
    }): PromoCodeState {
      const codeWrite = action.payload
      const isValid = state.promoCodes.find((code) => code.code === codeWrite)
      const isUse = state.promoCodeUse.find((code) => code.code === codeWrite)

      if (isValid && !isUse) {
        return { ...state, promoCodeUse: state.promoCodeUse.concat(isValid) }
      }
      return state
    },

    remuvePromoCode(state, action: {
      payload: string; type: string;
    }): PromoCodeState {
      const codeDelete = action.payload

        return { ...state, promoCodeUse: state.promoCodeUse.filter((code) => code.code !== codeDelete  ) }

    },

    clearPromocode(state): PromoCodeState {
        return { ...state, promoCodeUse: [] }
    },

  },
}
)

export const { addPromocode , clearPromocode, remuvePromoCode} = promoCodeSlice.actions
export default promoCodeSlice.reducer