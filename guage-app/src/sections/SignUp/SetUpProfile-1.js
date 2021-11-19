/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
// import {Link}from 'react-router-dom';

 
function SetUpProfile1(){

    return(
      <>
      <HeaderSignUp />
      <div class="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div class=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform -translate-y-16 ">
          <img src= {People}>
          </img>
          
        </div>
        <div class="transform -translate-y-32">
          <h1 className='text-4xl lg:text-5xl font-medium font-poppins text-black'>Let us set up your profile</h1>
          <p class="text-left text-lg my-4 md:text-xl font-poppins">
             Please provide correct information while signing up for an account
          </p>
          <div>
            <button class=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white flex justify-left space-x-7'>
                Sign Up with Facebook
            </button >
            <br/>
            <button class=' font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium r hover:bg-Dark-blue hover:text-white flex justify-left space-x-7'>
                Sign Up With Email
            </button>
          </div>
        </div>
      </div></>
    )
}

export default SetUpProfile1;
