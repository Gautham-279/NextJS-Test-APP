import axios, { Axios } from 'axios';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    gender:'',
    age:'',
    country:'',
    name:'',
    status:'ideal'
}
export const userInfoSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder.addCase(guessUserDetails.pending,(state,action)=>{
        state.status='loading'

     })
     builder.addCase(guessUserDetails.fulfilled,(state,action)=>{
        console.log("In fulfilled")
        state.age=action.payload.age
        state.country=action.payload.country
        state.gender=action.payload.gender
        state.name=action.payload.name
        state.status='success'
     })
     
     builder.addCase(guessUserDetails.rejected,(state,action)=>{
        state.status='rejected'

     })

    }

})


export const guessUserDetails=createAsyncThunk("user/guessDetails",async(name:any)=>{
    const [age,gender,country]=await axios.all(
      [axios.get(`https://api.agify.io?name=${name}`),axios.get(`https://api.genderize.io?name=${name}`),
      axios.get(`https://api.nationalize.io?name=${name}`)]
    )
    let countryName="cannot be guessed";
    // const age=await axios.get(`https://api.agify.io?name=${name}`)
     if(country.data.country){
        let probailty=0;
        for(let i=0;i<country.data.country.length;i++){
          
          if(country.data.country[i].probability>probailty){
            probailty=country.data.country[i].probability
            countryName=country.data.country[i].country_id
          }
        }
     }

     const genderData=gender.data.gender
     console.log("country",countryName)
    return {
        name:name,
                age:age.data,
       country:countryName,
       gender:genderData
    }
 
})



export default userInfoSlice.reducer