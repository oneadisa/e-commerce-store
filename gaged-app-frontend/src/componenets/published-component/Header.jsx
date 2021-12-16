import React from 'react'
import Logof from '../../images/logo-footer.jpg'

function Header() {
    return (
        <head className='flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2'>
            <div className='flex space-x-5 lg:space-x-24 h-10'>
                <div>
                    <img src={Logof} alt="" className='w-4/5 lg:w-full h-full' />
                </div>
                <input className='w-28 md:w-60 lg:w-72 lg:w-96 outline-none pl-1 lg:pl-5' />
            </div>
            <div className='flex gap-2 lg:gap-6 lg:pr-28 ml-auto'>
                <div>
                    <p className='text-lg font-normal text-white mt-1'>Cart(2)</p>
                </div>
                <div className='w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1' />
            </div>
        </head>
    )
}

export default Header
