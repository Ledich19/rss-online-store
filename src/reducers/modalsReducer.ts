import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  limit: number,
  page:  number,
  isForm: boolean,
  isOderFinish: boolean,
}

const initialState: InitialState= {
  limit: 0,
  page: 1,
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
    setLimit(state, action: {
      payload: number; type: string;
    }) {
      return { ...state, limit: action.payload }
    },
    setCartPage(state, action: {
      payload: number; type: string;
    }) {
      console.log(action.payload);
      
      return { ...state, page: action.payload }
    },
  },
}
)

export const { setIsOpenForm, setOpenOrderFinish,setLimit,setCartPage} = modalsSlice.actions
export default modalsSlice.reducer