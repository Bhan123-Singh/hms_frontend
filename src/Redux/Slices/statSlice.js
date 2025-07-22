import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState={
    allPatientCount:10,
    bookedAppointmentPatient:5
};

export const getStatsData=createAsyncThunk('stat/get',async()=>{
    try{ const response=axiosInstance.get('/admin/stats/users');
       toast.promise(response,{
        loading:'Getting the stats...',
        success:(data)=>{
            return data?.data?.message
        },
        error:'Failed to load data stats'
       }) 

    }
    catch(error){
        toast.error(error?.response?.data?.message);
    }
})
 const StatSlice = createSlice({
    name:'state',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{builder
        .addCase(getStatsData.fulfilled,(state,action)=>{
            state.allPatientCount=action?.payload?.allPatientCount;
            state.bookedAppointmentPatient=action?.payload?.bookedAppointmentPatient;
        })

    }
 });

 export default StatSlice.reducer;