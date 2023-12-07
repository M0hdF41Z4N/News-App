import { configureStore ,getDefaultMiddleware } from '@reduxjs/toolkit'

// importing all the reducers
import  {newsReducer}  from './reducers/newsReducer';
import  {authReducer}  from './reducers/authReducer';


// creating store
export const store = configureStore({
    reducer:{
        news:newsReducer,
        auth:authReducer
    }
    // ,middleware:[...getDefaultMiddleware()]
})