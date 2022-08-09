import { configureStore } from '@reduxjs/toolkit'
import { useAlertReducer } from './features/AlertManager'

export const store = configureStore({
  reducer: {
    alerts: useAlertReducer.reducer,
  },
})
