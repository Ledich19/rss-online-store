import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import filterReducer from "../reducers/filterReducer"
import productsReducer from "../reducers/productsReducer"
import cartReducer from "../reducers/cartReducer"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
