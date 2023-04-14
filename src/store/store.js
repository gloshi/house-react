import { configureStore } from '@reduxjs/toolkit'
import noticeSlice from './slices/noticeSlice'

export const store = configureStore({
  reducer: {
    notices: noticeSlice,
  },
})