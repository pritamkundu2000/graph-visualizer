import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Reducers/history';

export const store = configureStore({
  reducer:{
    history: rootReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;