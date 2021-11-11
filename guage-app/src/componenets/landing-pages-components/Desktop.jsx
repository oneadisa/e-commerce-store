/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logoh from '../../images/logo-header.jpg'

function Desktop() {
    return (
        <div className='flex justify-between items-center mx-auto py-4 md:px-10 lg:px-20 bg-light-blue'>
            <img src={Logoh} className='' />
            <ul className='flex gap-10 md:text-base lg:text-lg font-medium text-center items-center justify-center flex-1'>
                <li>Campaigns</li>
                <li>Stores</li>
                <li>About</li>
            </ul>
            <div className='flex md:gap-2 lg:gap-3 ml-auto' >
                <form action="/login" method="post" 
              className="form flex md:gap-2 lg:gap-3 ml-auto">
                <button className='py-2 md:px-5 lg:px-7 border border-Dark-blue text-Dark-blue font-medium rounded hover:bg-Dark-blue hover:text-white'>Log in</button>
                </form>
                <button className='py-2 md:px-5 lg:px-7 border border-Dark-blue bg-Dark-blue text-white font-medium rounded hover:bg-white hover:text-Dark-blue'>Sign up</button>

                        </div>
        </div>
    )
}

export default Desktop
