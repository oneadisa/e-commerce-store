/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from 'react';
import HeaderSignUp from './SignUp/SignUpComponents/HeaderSignUp-Login';
import People from '../images/Gaged-images/Group 3577.png'
import {Link} from 'react-router-dom';
import Loader from '../componenets/Loader'
import ErrorMessage from '../componenets/LoginErrorMessage';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from '../actions/userActions'


function LoginUser({history}){


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line no-unused-vars

  // useEffect(() => { 
    // const signedUpUserInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))

    // if (signedUpUserInfo) {
      // history.push('/')
    // }
  // 
// }, [history])

  const dispatch = useDispatch()

  const signedUpUserLogin = useSelector(state => state.signedUpUserLogin)
  const {loading, error, signedUpUserInfo} = signedUpUserLogin

  useEffect(() => {
    if  (signedUpUserInfo) {
      history.push('/')
    }
  }, [history, signedUpUserInfo])

  const submitHandler = async (event) => {
    event.preventDefault()

    dispatch(userLogin(email, password))
  }

    return(
      <>
        <HeaderSignUp />
        {error && <ErrorMessage/>}
        <div className="py-3 pb-10 px-3 md:px-10 flex flex-col lg:flex-row gap-10 md:gap-14 mx-auto">
          <div className="">
            <img src= {People}/>
          </div>
      
          <form >
            {loading && <Loader/>}
            <div className="flex flex-col md:w-4/5 lg:mt-24 justify-center">
              <h1 className='text-2xl md:text-3xl font-semibold font-poppins'>Welcome Back!</h1>
              <p className="text-lg my-4 md:text-lg font-poppins">
                We missed you, sign in to get more of the "Gaged" experience.
              </p>
              <div className='flex flex-col gap-2 mt-5'>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className=' w-full h-12 pl-8 font-poppins border-2 border-gray-500 text-black text-base md:text-lg outline-none' placeholder="Email"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full h-12 pl-8 font-poppins border-2 border-gray-500 text-black text-base md:text-lg outline-none' placeholder="Password"/> 
              </div>
              <p className="font-poppins my-3">Forgot Password? <span className="font-poppins text-blue-700 space-y-7">Reset Here</span></p>
              <button onClick={submitHandler} className='h-12 mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium hover:bg-white hover:text-black'>
                Login
              </button>
              <p className="font-poppins my-5 font-medium">Don't have an account? <Link to="/signup" className="font-poppins text-blue-700 space-y-7">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </>
    )
}

export default LoginUser;
