import {configureStore }from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice';
import statSliceReducer from './Slices/statSlice';
import appointmentSliceReducer from './Slices/appointmentSlice'

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        stat:statSliceReducer,
        appointment:appointmentSliceReducer
    },
    devTools:true
})


export default store; 

// bhan singh pate