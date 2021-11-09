/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
// import {Link}from 'react-router-dom';


function SignUpGeneral(){

    return(
      <>
      <HeaderSignUp />
      <div class="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div class=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform translate-x-32 -translate-y-32 scale-150">
          <img src= {People}>
          </img>
          
        </div>
        <div class="container mx-auto flex flex-col md:text-left transform translate-x-64 -translate-y-16 ">
          <h1 className='text-4xl lg:text-5xl font-medium font-poppins text-black'>Select your account type</h1>
          <p class="font-poppins text-left text-lg my-4 md:text-xl">
             Choose your account type to help us tailor your experience
          </p>
          <div class="flex justify-left space-x-7">
            <button class='font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium  hover:bg-Dark-blue hover:text-white'>
                Individual
            </button >
            <button class='font-poppins py-2 px-10 md:py-3 md:px-20 border-2 border-black text-black sm:text-base md:text-xl font-medium r hover:bg-Dark-blue hover:text-white'
 Up>
                Business
            </button>
          </div>
          <p className='text-lg md:text-xl leading-6 md:leading-7 my-40'>
          Already have an account? <a class='text-blue-600'>Sign In </a>
          </p>
        </div>
      </div></>
    )
}

export default SignUpGeneral;
