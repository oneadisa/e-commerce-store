/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from 'react';
import HeaderSignUp from './SignUp/SignUpComponents/HeaderSignUp-Login';
import People from '../images/Gaged-images/Group 3577.png'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from '../componenets/Loader'
import ErrorMessage from '../componenets/ErrorMessage';
// import { log } from 'console';


function LoginUser({history}){


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // useEffect(() => { 
    // const signedUpUserInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))

    // if (signedUpUserInfo) {
      // history.push('/')
    // }
  // 
// }, [history])

  const submitHandler = async (event) => {
    event.preventDefault()

    try {
      const config ={
        headers:{
          "Content-type":"application/json"
        }
      }
setLoading(true)

const {data} = await axios.post("/app/loginUser",
{email, password},
config)
console.log(data)
localStorage.setItem('signedUpUserInfo', JSON.stringify(data))

setLoading(false)

    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)

    }
  }

    return(
      <>
      <HeaderSignUp />
       {error && <ErrorMessage/>}
      <div className="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div className=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform -translate-y-16 ">
          <img src= {People}>
          </img>
          </div>
          
          
        <form >
          {loading && <Loader/>}
        <div className="transform -translate-y-32 ">
          <h1 className='text-4xl lg:text-5xl font-medium font-poppins text-black'>Welcome Back!</h1>
          <p className="text-left text-lg my-4 md:text-xl font-poppins">
             We missed you, sign in to get more of the "Gaged" experience.
          </p>
          <div>
            <input typ='email' onChange={(e)=>setEmail(e.target.value)} value={email} className=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium    flex justify-left space-x-7' placeholder="Email"/>
                
            
            <br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium   flex justify-left space-x-7' placeholder="Password"/> 
          </div>
          <p className="font-poppins my-8">Forgot Password? <span className="font-poppins text-blue-700 space-y-7">Reset Here</span></p>
          <button onClick={submitHandler} className=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white flex justify-left space-y-7'>
            Login
          </button>
            <p className="font-poppins my-8">Don't have an account? <Link to="/signup" className="font-poppins text-blue-700 space-y-7">Sign Up</Link></p>

        </div>
        </form>
        
      </div></>
    )
}

export default LoginUser;
