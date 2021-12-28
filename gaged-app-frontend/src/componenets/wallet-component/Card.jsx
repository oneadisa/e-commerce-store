import React from 'react'
import paypal from "../../images/PayPal.svg";
import { RiDeleteBinLine } from 'react-icons/ri';

function Card() {
    return (
        <div className='py-3 flex items-center border-b border-gray-300 cursor-pointer'>
            <div className='flex gap-2'>
                <img src={paypal} alt='' />
                <div className='flex flex-col'>
                    <h4 className='text-base font-medium'>Payment methods</h4>
                    <p className='text-base'>Username</p>
                </div>
            </div>
            <div className='ml-auto flex items-center gap-3'>
                <button className='text-sm font-medium text-Dark-blue hover:text-red-500'>Edit</button>
                <RiDeleteBinLine />
            </div>
        </div>
    )
}

export default Card
