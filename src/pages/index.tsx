import React from 'react';
import { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { guessUserDetails } from './api/actions';
import axios  from 'axios';
import { useRouter } from 'next/router';


export default function Home() {

  const userState=useSelector((state:any)=>state.user)
  const dispatch:any=useDispatch();
  const reference:any=useRef(null)
  const router=useRouter();

  async function  guess(){
   
    if(reference.current?.value.trim()){
      await  dispatch(guessUserDetails(reference.current?.value as any))


     router.push('./result')
    }else{
      alert('Please enter a valid name')
    }
     
  
  //  console.log("Heree",reference.current.value)
  }
  console.log("user state",userState)
      
  return (
    <div style={{background:"white", width:"100%",height:"100vh"}}>
      <div style={{paddingTop:'30px',}}>
   
      <form style={{ marginLeft:'30%',width:'30%',background:"gray",height:'500px'}}>
      <div style={{paddingTop:'5%',paddingLeft:'5%'}}>
      <input ref={reference} style={{height:'50px',width:"50%"}} placeholder="Your name.."></input>
      <div >
      {userState.status!='loading'?
        <div style={{background:'blue',marginTop:'20px',width:'50%',height:'50px',textAlign:'center',cursor:'pointer'}}
        onClick={guess}
        >

        Guess Gender,Age,Country
        </div>:null}
        </div>
      </div>
      </form>
      </div>
      </div>
  )
}
