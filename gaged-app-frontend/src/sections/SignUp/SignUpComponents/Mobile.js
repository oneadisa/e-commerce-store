/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Logo from '../../../images/Gaged-images/Blue Logo.png';
import {Link} from 'react-router-dom';



function Mobile() {
    const [open, setOpen] = useState(false)

	const HandleNav = () => {
		setOpen(!open)
	}

    return (
        <div className='bg-white mx-auto flex items-center p-5 flex-wrap '>
            <Link to='/'><img src={Logo} className=''/></Link>
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
            {open === true ? (<div className='absolute w-full bg-gray-500 opacity-95 px-8 py-10 top-20 right-0 left-0'>
                <ul
                className='flex flex-col space-y-5 text-center'
                >
                    <li className='text-black text-2xl font-semibold'>
                        <a href='#' >
                            Campaigns
                        </a>
                    </li>
                    <li className='text-black text-2xl font-semibold'>
                        <a href='#' >
                            Stores
                        </a>
                    </li>
                    <li className='text-black text-2xl font-semibold'>
                        <a href='#' >
                            About
                        </a>
                    </li>
                    <li className='py-3 w-full border border-Dark-blue text-Dark-blue text-2xl font-semibold rounded hover:bg-Dark-blue hover:border-Dark-blue hover:text-white'>
                        <a href='#' >
                            Log in
                        </a>
                    </li>
                    <li className='py-3 w-full border border-Dark-blue bg-Dark-blue text-white text-2xl font-medium rounded hover:bg-white hover:text-Dark-blue'>
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
