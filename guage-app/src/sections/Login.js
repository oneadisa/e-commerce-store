/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderSignUp from './SignUp/SignUpComponents/HeaderSignUp-Login';
import People from '../images/Gaged-images/Group 3577.png';
// import {Link}from 'react-router-dom';


function Login(){

    return(
      <>
      <HeaderSignUp />
      <div class="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div class=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform -translate-y-16 ">
          <img src= {People}>
          </img>
          
        </div>
        <div class="transform -translate-y-32 ">
          <h1 className='text-4xl lg:text-5xl font-medium font-poppins text-black'>Welcome Back!</h1>
          <p class="text-left text-lg my-4 md:text-xl font-poppins">
             We missed you, sign in to get more of the "Gaged" experience.
          </p>
          <div>
            <input typ='email' class=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium    flex justify-left space-x-7' placeholder="Email"/>
                
            
            <br/>
            <input type="password" class=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium   flex justify-left space-x-7' placeholder="Password"/> 
          </div>
          <p class="font-poppins my-8">Forgot Password? <span class="font-poppins text-blue-700 space-y-7">Reset Here</span></p>
          <button class=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white flex justify-left space-y-7'>
            Login
          </button>
            <p class="font-poppins my-8">Don't have an account? <span class="font-poppins text-blue-700 space-y-7">Sign Up</span></p>

        </div>
      </div></>
    )
}

export default Login;
