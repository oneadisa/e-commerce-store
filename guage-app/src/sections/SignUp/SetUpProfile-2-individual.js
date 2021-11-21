/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,  {useState, useEffect} from 'react';
import HeaderSignUp from './SignUpComponents/HeaderSignUp-Login';
import People from '../../images/Gaged-images/Group 3577.png';
import Loader from '../../componenets/Loader';
import {Link} from 'react-router-dom';
import GeneralErrorMessage from '../../componenets/GeneralErrorMessage';
// import PictureErrorMessage from '../../componenets/PictureErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import {signUpUser } from '../../actions/userActions';
// import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css"



 

function SetUpProfile2Individual({history}){


    // const [error, setError] = useState(false)
    // const [picMessage, setPicMessage] = useState(null)
    const [message, setMessage] = useState(null)
    // const [loading, setLoading] = useState(false)

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
        };
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        confirmPassword: ''
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

        const dispatch = useDispatch();

        const userSignUp = useSelector((state) => state.userSignUp);
        const { loading, error, signedUpUserInfo } = userSignUp;

                // const postDetails = (pics) => {
                // if (
                //   pics ===
                //   "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                // ) {
                //   return setPicMessage("Please Select an Image");
                // }
                // setPicMessage(null);
                // if (pics.type === "image/jpeg" || pics.type === "image/png") {
                //   const data = new FormData();
                //   data.append("file", pics);
                //   data.append("upload_preset", "notezipper");
                //   data.append("cloud_name", "piyushproj");
                //   fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
                    // method: "post",
                    // body: data,
                //   })
                    // .then((res) => res.json())
                    // .then((data) => {
                    //   setCredentials.pic(data.url.toString());
                    // })
                    // .catch((err) => {
                    //   console.log(err);
                    // });
                // } else {
                //   return setPicMessage("Please Select an Image");
                // }
                    // }


                        useEffect(() => {
                           if (signedUpUserInfo) {
                             history.push("/");
                           }
                         }, [history, signedUpUserInfo]);
                                   

        
        const handleClick =  (event) => {
            event.preventDefault();

            if (credentials.password !== credentials.confirmPassword) {
      setMessage("Oops, Passwords do not match. Please try again.");
    } else dispatch(signUpUser(credentials.firstName, credentials.lastName, credentials.email, credentials.password, credentials.pic, credentials.phoneNumber));
   
   
        // window.location = "/gaged"
  


            // const registered = {
                // firstName: credentials.firstName,
                // lastName: credentials.lastName,
                // email: credentials.email,
                // phoneNumber: credentials.phoneNumber,
                // password: credentials.password,
                // pic: credentials.pic,
                // confirmPassword: credentials.confirmPassword
            // }
// 
                    // if (registered.password !== registered.confirmPassword) {
            // setMessage('Passswords do not match!')
            //    } else {
                //    setMessage(null)
                //    try {
                    //    const config = {
                        //    headers: {
                            //    "Content-type": "application/json",
// 
                        //    }
                    //    }
                    //    const {data} = await axios.post("/app/signup/2/individual",
                        // registered,
                        // config)
                        // console.log(data)
                        // localStorage.setItem('signedUpUserInfo', JSON.stringify(data))
// 
                        // setLoading(false)
                                            // }
                        // catch (error) {
                        // setError(error.response.data.message)
                        // setLoading(false) }
            //    }

            // axios.post('http://localhost:8080/app/signup/2/individual', registered)
            // .then(response => console.log(response.data)
            // )

            
            // setCredentials(
                // {
                    //  firstName: '',
                    // lastName: '',
                    // email: '',
                    // phoneNumber: '',
                    // password: '',
                    // pic: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                    // confirmPassword: ''
                // }
            // )
}
                 
         
         
    return(
      <>
      <HeaderSignUp children={undefined} title='User SignUp' />
      {message && <GeneralErrorMessage variant="danger">{message}</GeneralErrorMessage>}
        {error && <GeneralErrorMessage variant="danger">{error}</GeneralErrorMessage>}
      <div className="p-1 h-screen w-screen flex  md:flex-row items-center  bg-white">
        <div className=" flex justify-around content text-3xl text-center md:text-left pl-6 p-8 transform  -translate-y-16 ">
          <img src= {People}>
          </img>
          
        </div>
        <div className='transform -translate-y-10 '>
            <div className="text-start mb-10">
                    <h1 className="font-bold font-poppins text-3xl text-gray-900">Let us set up your profile</h1>
                    <p className='font-poppins'>Please provide correct information while setting up an account.</p>
                </div>
                {/* {message && <ErrorMessage/> } */}
                
                <form onSubmit={handleClick}>
                    {loading && <Loader/> }
                    <div className="flex -mx-3">
    <div className="w-1/2 px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1"></label>
        <div className="flex">
            <div className="w-10 z-10 pl-1 text-start pointer-events-none flex "><i className="mdi mdi-account-outline text-black  text-lg"></i></div>
            <button  className="w-full text-left -ml-10 pl-10 pr-3 py-2 bg-indigo-300 border-2 border-none outline-none text-black hover:bg-indigo-500 text-start ">Sign up with email</button>
            
        </div>
    </div>
</div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1"></label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input onChange={handlechange} name='firstName' type="text" className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="First name" value={credentials.firstName}  />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1"></label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-start"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
                                <input onChange={handlechange} name="lastName" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Last Name" value={credentials.lastName}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
    <div className="w-1/2 px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1"></label>
        <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name="email" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Email" value={credentials.email}/>
        </div>
    </div>
    <div className="w-1/2 px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1"></label>
        <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name="phoneNumber" type="number" className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Phone" value={credentials.phoneNumber}/>
        </div>
    </div>
</div>
<div className="flex -mx-3">
    
            <div className="w-1/2 px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1"></label>
             <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
            <input onChange={handlechange} name='password' type={passwordShown ? "text" : "password"} className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Password" value={credentials.password} />
            {/* <i className="fa fa-eye transform translate-y-4 translate-x-3" onClick={togglePasswordVisiblity}/> */}
            </div>
            </div>
        <div className="w-1/2 px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1"></label>
        <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
        <input onChange={handlechange} name='confirmPassword' type={passwordShown ? "text" : "password"} className="w-full -ml-10 pl-10 pr-3 py-2 border-2 border-black outline-none focus:border-blue-500" placeholder="Confirm Password" value={credentials.confirmPassword} />
        <i  className="fas fa-eye transform translate-y-4 translate-x-4 " onClick={togglePasswordVisiblity} />
        </div>
        </div>
        </div>
    {/* {picMessage && (<><PictureErrorMessage children={undefined} variant='danger' />{picMessage} <PictureErrorMessage children={undefined} /></>)} */}
    {/* <div className="w-1/2 px-3 mb-5"> */}
        {/* <label htmlFor="" className="text-xs  font-semibold shadow-lg tracking-wide cursor-pointer px-1"> */}
        {/* <div className="flex transform  -translate-y-1"> */}
{/*              */}
            {/* <div className="w-10 z-1 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div> */}
            {/* <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> */}
            {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
                 {/* </svg> */}
            {/* <span  className="w-full mt-2 text-base leading-normal -ml-10 pl-10 pr-3 py-2 text-left bg-indigo-300 outline-none hover:bg-indigo-500" placeholder="Add your Profile Image">Add your Profile Image</span> */}
            {/* <input onChange={(e) => postDetails(e.target.files[0])} name='pic' type='image/png' className="hidden" value={credentials.pic}  /> */}
        {/* </div> */}
        {/* </label> */}
    {/* </div> */}

            
<div className="text-start ">
    
         <div className="">
      <label className=" ">
        <input type="checkbox" className="form-checkbox h-5 w-5"/>
        <span className="font-poppins"> Subscribe to our newsletter and receive tips on how to launch a successful campaign.</span>
      </label>
    </div>
       
        <p className='mb-5 font-poppins'>By creating an account, you agree to the <Link to="" className='text-indigo-400'>Terms of Service</Link></p>
        
    </div>

                    
                    <div className="flex -mx-3  place-items-start ">
                        <div className="w-full px-3 mb-5 place-items-start">
                            <button onClick={handleClick} className="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-800  text-white  px-3 py-3 font-semibold">CREATE ACCOUNT</button>
                        </div>
                    </div>

                    <div className="text-start">
                        <p className='mb-5 font-poppins'>Already on Gaged?<Link to="/userLogin" className='text-indigo-400'> Login Here</Link></p>
                        <i calssName="fa fa-eye password-icon " />
                    </div>
                    </form>
        </div>
            
      </div></>
    )
}

export default SetUpProfile2Individual;
