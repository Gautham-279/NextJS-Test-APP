import {  configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer  from './actions'

const rootReducer=combineReducers({
    
    user:userReducer
  })
  

const store = configureStore({
    reducer:rootReducer ,
  })


  export default store