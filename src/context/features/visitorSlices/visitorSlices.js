

import { createSlice } from '@reduxjs/toolkit'

const visitorSlice = createSlice({
 name: 'navShift',
 initialState: {
    isLoading:false,
    isError:false,
    isSuccess:false,


 },
 reducers: {

    setLoading(state){

        state.isLoading = true

    },
    setSuccess(state,action){

        let res = 
        


    },
    setError(){

        state.isLoading = true
    },

 
 }
})

// Action creators are generated for each case reducer function
export const {  } = visitorSlice.actions

export default visitorSlice.reducer