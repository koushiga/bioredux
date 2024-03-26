import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{
        name:"",
        email:"",
        phnum:0,
        age:0,
        dob:0
}
};

const slice=createSlice({
    name:"store",
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.value=action.payload
        },
        previous:(state)=>{
            state.value={
                name:"",
                email:"",
                phnum:0,
                age:0,
                dob:0
        }
        }
    }
})

export const{submit,previous}=slice.actions;
export default slice.reducer;