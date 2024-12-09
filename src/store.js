import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slice/counterSlice'

export default configureStore({
  reducer: {
    currentUser: counterSlice,
  },
})