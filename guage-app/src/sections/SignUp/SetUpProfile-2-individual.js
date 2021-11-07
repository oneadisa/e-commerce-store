/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
// import {Link}from 'react-router-dom';


function SetUpProfile2Individual(){

    return(
      <>
      <HeaderSignUp />
      <div class="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div class=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform  -translate-y-16 ">
          <img src= {People}>
          </img>
          
        </div>
        <div className='transform -translate-y-10 '>
            <div class="text-start mb-10">
                    <h1 class="font-bold font-poppins text-3xl text-gray-900">Let us set up your profile</h1>
                    <p class='font-poppins'>Please provide correct information while setting up an account.</p>
                </div>
                    <div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-start pointer-events-none flex "><i class="mdi mdi-account-outline text-black  text-lg"></i></div>
            <button type="text" class="w-full text-left -ml-10 pl-10 pr-3 py-2 bg-indigo-300 border-2 border-none outline-none text-black hover:bg-indigo-500 text-start ">Sign up with email</button>
        </div>
    </div>
</div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1"></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="First name"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1"></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Email"/>
        </div>
    </div>
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Phone"/>
        </div>
    </div>
</div>
<div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Password"/>
        </div>
    </div>
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-1 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <button type="text" class="w-full -ml-10 pl-10 pr-3 py-2 text-left bg-indigo-300 outline-none hover:bg-indigo-500" placeholder="Add your Profile Image">Add your Profile Image</button>
        </div>
    </div>
</div>

<div class="text-start ">
         <div class="">
      <label class=" ">
        <input type="checkbox" class="form-checkbox h-5 w-5"/>
        <span class=""> Subscribe to our newsletter and receive tips on how to launch a successful campaign.</span>
      </label>
    </div>
       
        <p class='mb-5'>By creating an account, you agree to the <a class='text-indigo-400'>Terms of Service</a></p>
    </div>

                    
                    <div class="flex -mx-3  place-items-start ">
                        <div class="w-full px-3 mb-5 place-items-start">
                            <button class="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-800  text-white  px-3 py-3 font-semibold">CREATE ACCOUNT</button>
                        </div>
                    </div>
        </div>
        
        
        
        
        
        
        
        
          
        
      </div></>
    )
}

export default SetUpProfile2Individual;
