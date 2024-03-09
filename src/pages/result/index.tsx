import { useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux'

export default function App(){

    const userState=useSelector((state:any)=>state.user)
    const router=useRouter();
   console.log(userState)

   function navigateToLandingPage(){
      router.push('/')
   }

    return(
        <div>
          <div style={{background:'yellow',color:'black',fontWeight:'bold',width:'100%',height:'20px'}}>
          {userState.name}'s age is {userState.age}, gender is {userState.gender}, and from {userState.country} country
          </div>
          <div style={{marginTop:'20px',width:'20%',background:'gray',textAlign:'center',cursor:'pointer'}} onClick={navigateToLandingPage}>
             navigateToLandingPage
          </div>
        
        </div>
    )


} 