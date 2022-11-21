





import { configureStore } from '@reduxjs/toolkit'


import navReducer from './features/navSlices/navSlices'

const store = configureStore({
  reducer: {
    navReducer
  }
})


export default store