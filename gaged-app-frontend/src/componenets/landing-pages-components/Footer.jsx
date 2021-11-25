/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logof from '../../images/logo-footer.jpg'

function Footer() {
    return (
        <div className='px-5 md:px-10 lg:px-20 pt-20 pb-10 md:py-10 bg-Dark-blue'>
            <img src
            ={Logof} />
            <div className='flex flex-col gap-20 md:gap-0 md:flex-row justify-between my-14'>
                <div className='flex flex-col gap-6 justify-between'>
                    <p className='text-white text-base font-medium'>
                        Join our email newsletter to recieve tips on how to get more out of Gaged.
                    </p>
                    <form className='flex'>
                        <input 
                            placeholder='Your email address'
                            className='border border-white flex-1 bg-Dark-blue pl-6 md:pl-12 text-white outline-none'
                        />
                        <button className='bg-white px-10 py-1 text-xl font-medium'>Join</button>
                    </form>
                </div>
                <div className='flex text-white justify-between md:gap-5 lg:gap-8'>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold text-lg mb-2'>FEATURES</h5>
                        <ul className='flex flex-col gap-1 text-base font-light'>
                            <li>Raise funds</li>
                            <li>Digital store</li>
                            <li>Explore</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold text-lg mb-2'>ABOUT</h5>
                        <ul className='flex flex-col gap-1 text-base font-light'>
                            <li>About us</li>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold text-lg mb-2'>HELP</h5>
                        <ul className='flex flex-col gap-1 text-base font-light'>
                            <li>Contact us</li>
                            <li>FAQ</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
