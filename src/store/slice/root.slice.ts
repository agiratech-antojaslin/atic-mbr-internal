import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user.slice'
import customizationReducer from 'features/theme/customizationReducer'

const rootReducer = combineReducers({
  user: userSlice,
  customization: customizationReducer,
})

export default rootReducer
