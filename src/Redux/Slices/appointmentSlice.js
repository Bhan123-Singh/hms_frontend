
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState={
    appointmentdata :[]

}
export const getappointment=createAsyncThunk("/appointment/get",async()=>{
    try{
        const response=axiosInstance.get("/getappointments");
        console.log("response->",response)
        toast.promise(response,{
            loading:"loading course data...",
            success:"course loaded successfully",
            error:"Failed to get the courses",
    
        });
        return (await response).data.courses;
    }
   
    catch(error){
        toast.error(error?.response?.data?.message)
    }
});

//creatinf asyncthunk for deleting the course by admin
// export const deleteAppointment=createAsyncThunk("/appointment/get",async(id)=>{
//     try{
//         const response=axiosInstance.delete(`/appointments/${id}`);
//         toast.promise(response,{
//             loading:"deleting  course...",
//             success:"course deleted successfully",
//             error:"Failed to delete the courses",
    
//         });
//         return (await response).data.courses;
//     }
   
//     catch(error){
//         toast.error(error?.response?.data?.message)
//     }
// });


export const bookAppointment=createAsyncThunk('/patient/appointment',async(data)=>{
    
    try{
        
        
        console.log("formdata",data)
        // define api request to server
        const response=axiosInstance.post('/appointment',data);
        toast.promise(response,{
            loading:'Booking your Appointment',
            success:'Booked Appointment successfully',
            error:'Failed to Booked Appointment'
        });
        return(await response).data // it means send the data property of response to server 

    }
    catch(error){
       toast.error(error?.response?.data?.message);

    }
})

// promises lifecycle action

// interface FulfilledAction<ThunkArg, PromiseResult> {
//   type: string
//   payload: PromiseResult
//   meta: {
//     requestId: string
//     arg: ThunkArg
//   }
// }


// interface RejectedAction<ThunkArg> {
//   type: string
//   payload: undefined
//   error: SerializedError | any
//   meta: {
//     requestId: string
//     arg: ThunkArg
//     aborted: boolean
//     condition: boolean
//   }
// }

// To handle these actions in your reducers, reference the action creators in createReducer or createSlice using the "builder callback" notation.
const appointmentSlice=createSlice({
    name:"appointment",
    initialState,
    reducers:{},//standard reducer logic,with auto generated action types per reducer
    extraReducers:(builder)=>{
        builder.addCase(getappointment.fulfilled,(state,action)=>{
       
           if(action.payload){
            console.log("actionPayload->",action.payload)
            state.appointmentdata=action.payload;
           } 
        })


    }
})
export default appointmentSlice.reducer;




/* Q-1: What is Redux thunk?
   Ans: Thunk is a logical concept in programming where you deal with a function that is primarily used to delay the 
         calculation or evaluation of any operation.

         ** for Redux specifically 'thunks' are a pattern of writting functions with logic inside that can interact
            with a Redux store's dispatch and getState methods-
         ** using thuncks requires the redux-thunk middleware to be added to the redux store as part of its configuration
         Note-1: Thunks are a standard approach for writting async logic in Redux apps, and are commonly used for data fetching
         .However they can be used for a variety of tasks and can contain both synchronous and asynchronous logic
         
         Note-2: Writing Thunks->
                                   A thunk function is a function that accepts two argument .the Redux store Dispatch method
                                   ,and the Redux store 'getState method' . Thunk functions are not directly called by application
                                    code. Instead,they are passed to 'store.dispatch()'

      Q-2: what is createAsyncThunk?
      Ans:  A function that accepts a Redux action type string and 
            a callback function that should return a promise. 
            It generates promise lifecycle action types based on the action type prefix that you pass in,
            and returns a thunk action creator 
            that will run the promise callback and dispatch the lifecycle actions based on the returned promise.                              

           Ex. dispatch(CreateNewCourse(useInput))

*/