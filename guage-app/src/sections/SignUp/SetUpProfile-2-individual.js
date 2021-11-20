/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,  {useState} from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import {Link}from 'react-router-dom';


function SetUpProfile2Individual(){

const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
})
        function handlechange(event){
        
        const {value, name} = event.target;

        setCredentials((prevValue) => {
                return {
                    ...prevValue,
                    [name]: value
                }
        })

        }

        function handleClick(event){
            event.preventDefault();

            const registered = {
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                email: credentials.email,
                phoneNumber: credentials.phoneNumber,
                password: credentials.password,
            }

            axios.post('http://localhost:8080/app/signup/2/individual', registered)
            .then(response => console.log(response.data)
            )

            // window.location = "/guage"
            setCredentials(
                {
                     firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    password: ''
                }
            )
        }

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

                <form onSubmit={handleClick}>
                    <div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-start pointer-events-none flex "><i class="mdi mdi-account-outline text-black  text-lg"></i></div>
            <button type="" class="w-full text-left -ml-10 pl-10 pr-3 py-2 bg-indigo-300 border-2 border-none outline-none text-black hover:bg-indigo-500 text-start ">Sign up with email</button>
        </div>
    </div>
</div>

                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1"></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input onChange={handlechange} name='firstName' type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="First name" value={credentials.firstName}  />
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1"></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input onChange={handlechange} name="lastName" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Last Name" value={credentials.lastName}/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name="email" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Email" value={credentials.email}/>
        </div>
    </div>
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name="phoneNumber" type="number" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Phone" value={credentials.phoneNumber}/>
        </div>
    </div>
</div>
<div class="flex -mx-3">
    <div class="w-1/2 px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1"></label>
        <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name='password' type="password" class="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Password" value={credentials.password} />
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
       
        <p class='mb-5'>By creating an account, you agree to the <Link to="" class='text-indigo-400'>Terms of Service</Link></p>
    </div>

                    
                    <div class="flex -mx-3  place-items-start ">
                        <div class="w-full px-3 mb-5 place-items-start">
                            <button onClick={handleClick} class="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-800  text-white  px-3 py-3 font-semibold">CREATE ACCOUNT</button>
                        </div>
                    </div>

                    <div class="text-start">
                        <p class='mb-5 font-poppins'>Already on Gaged?<Link to="/login" class='text-indigo-400'> Login Here</Link></p>
                    </div>
                    </form>
        </div>
        
        
        
        
        
        
        
        
          
        
      </div></>
    )
}

export default SetUpProfile2Individual;
