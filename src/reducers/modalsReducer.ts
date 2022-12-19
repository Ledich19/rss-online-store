import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isForm: false,
  isOderFinish: false,
}

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpenForm(state, action: {
      payload: boolean; type: string;
    }) {
      return { ...state, isForm: action.payload }
    },
    setOpenOrderFinish(state, action: {
      payload: boolean; type: string;
    }) {
      return { ...state, isOderFinish: action.payload }
    },
  },
}
)

export const { setIsOpenForm, setOpenOrderFinish} = modalsSlice.actions
export default modalsSlice.reducer