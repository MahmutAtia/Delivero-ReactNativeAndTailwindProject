import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import ResReducer from "./features/restaurantSlice"

export default configureStore({
  reducer: {
    basket: basketReducer,
    res : ResReducer    
  }
})