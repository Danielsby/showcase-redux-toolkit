import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './index';

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `Rootstate` and `AppDispatch` types from the store itself.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
