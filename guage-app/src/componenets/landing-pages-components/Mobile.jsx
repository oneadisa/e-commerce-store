import React, { useState } from 'react'
import Logoh from '../../images/logo-header.jpg'

function Mobile() {
    const [open, setOpen] = useState(false)

	const HandleNav = () => {
		setOpen(!open)
	}

    return (
        <div className='bg-light-blue mx-auto flex items-center p-5 flex-wrap '>
            <img src={Logoh} className=''/>
            <button
                className='ml-auto'
                onClick={HandleNav}
            >
                {open === true ? (
                    <i class='far fa-window-close fa-2x'></i>
                ) : (
                    <i class='fas fa-bars fa-2x'></i>
                )}
            </button>
            {open === true ? (<div class='top-nav w-full pt-5 left-0 right-0 min-h-screen tranform transition duration-200'>
                <ul
                className='flex flex-col space-y-5 text-center'
                >
                    <li class='text-black text-2xl font-semibold hover:text-Dark-blue'>
                        <a href='#' >
                            Campaigns
                        </a>
                    </li>
                    <li class='text-black text-2xl font-semibold hover:text-Dark-blue'>
                        <a href='#' >
                            Stores
                        </a>
                    </li>
                    <li class='text-black text-2xl font-semibold hover:text-Dark-blue'>
                        <a href='#' >
                            About
                        </a>
                    </li>
                    <li class='py-2 px-14 border border-Dark-blue text-Dark-blue text-2xl font-semibold font-medium rounded hover:bg-Dark-blue hover:text-white'>
                        <a href='#' >
                            Log in
                        </a>
                    </li>
                    <li class='py-2 px-14 border border-Dark-blue bg-Dark-blue text-white text-2xl font-semibold font-medium rounded hover:bg-white hover:text-Dark-blue'>
                        <a href='#' >
                            Sign up
                        </a>
                    </li>
                </ul>
            </div>) : null}
        </div>
    )
}

export default Mobile
