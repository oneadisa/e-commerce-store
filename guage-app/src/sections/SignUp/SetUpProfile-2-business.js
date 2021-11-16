/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
import axios from 'axios';
import ErrorMessage from '../../componenets/ErrorMessage';
import Loader from '../../componenets/Loader';
// import {Link}from 'react-router-dom';


function SetUpProfile2Business(){

    const [error, setError] = useState(false)
    const [picMessage, setPicMessage] = useState(null)
    const [message, setMessage] = useState(null)
     const [loading, setLoading] = useState(false)
    

const [credentials, setCredentials] = useState({
    businessName: '',
    accountHolderName: '',
    email: '',
    phoneNumber: '',
    password: '',
    pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
})
        function handlechange(event){
        
        const {value, name} = event.target;

        setCredentials((prevValue) => {
                return {
                    ...prevValue,
                    [name]: value
                };
        });

        }

        const handleClick = async (event) => {
            event.preventDefault();

           

           

            const registered = {
                businessName: credentials.businessName,
                accountHolderName: credentials.accountHolderName,
                email: credentials.email,
                phoneNumber: credentials.phoneNumber,
                password: credentials.password,
                pic: credentials.pic
            }

            //  if (registered.password !== registered.confirmPassword) {
                //  setMessage('Passswords do not match!')
                    // } else {
                    //    setMessage(null)
                        // try {
                            // const config = {
                                // headers: {
                                    // "Content-type": "application/json",
                                // }
                            // }
                            // const {data} = await axios.post("/app/signup/2/individual",
                            //  {businessName, accountHolderName, email, phoneNumber, password, pic},
                            //  config)
                            //  console.log(data)
                            //  localStorage.setItem('signedUpBusinessInfo', JSON.stringify(data))
                            //  setLoading(false)
                                                //  }
                            //  catch (error) {
                            //  setError(error.response.data.message)
                            //  setLoading(false) } 
                            // 

                    // }

            axios.post('http://localhost:8080/app/signup/2/business', registered)
            .then(res => console.log(res.data)
            )

            // window.location = "/"
            setCredentials(
                {
                     businessName: '',
                    accountHolderName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                }
            )
        }

    return(
      <>
      <HeaderSignUp />
      {error && setError}
      <div class="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div class=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform  -translate-y-16 ">
          <img src= {People}>
          </img>
          
        </div>
        {message && <ErrorMessage/> }
        <form onSubmit={handleClick}>
            {loading && <Loader/> }
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
                                <input onChange={handlechange} name='businessName' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Business name" value={credentials.businessName} />
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1"></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input onChange={handlechange} name='accountHolderName' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Account holder name" value={credentials.accountHolderName} />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name='email' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Email"  value={credentials.email} />
        </div>
    </div>
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name='phoneNumber' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Phone" value={credentials.phoneNumber}/>
        </div>
    </div>
</div>
<div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name='password' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Password" value={credentials.password} />
        </div>
    </div>
    <div class="w-1/2 px-3 mb-5">
    <label for="" class="text-xs  font-semibold shadow-lg tracking-wide cursor-pointer px-1">
    <div class="flex transform  -translate-y-1">
        
        <div class="w-10 z-1 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
        {/* <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> */}
        {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
             {/* </svg> */}
        <span type="text" class="w-full mt-2 text-base leading-normal -ml-10 pl-10 pr-3 py-2 text-left bg-indigo-300 outline-none hover:bg-indigo-500" placeholder="Add your Profile Image">Add your Profile Image</span>
        <input onChange={handlechange} name='pic' type='file' class="hidden" value=''  />
    </div>
    </label>
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
                        <div class="flex w-full px-3 mb-5 place-items-start">
                            <button class="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-800  text-white  px-3 py-3 font-semibold  place-items-start">CREATE ACCOUNT</button>
                        </div>
                    </div>

        </div>
        </form>

      </div></>
    )
}

export default SetUpProfile2Business;
