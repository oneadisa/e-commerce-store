import React from 'react';
import { GoStar } from 'react-icons/go';
import { MdOutlineStarOutline } from 'react-icons/md';

function ProductRB() {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50'>
        <div className='mx-2 px-5 lg:px-10 bg-white rounded-md pt-3 pb-8 w-full md:w-1/2 lg:w-2/5 flex flex-col gap-2'>
            <div className='text-xl font-semibold text-right'>X</div>
            <div className='flex flex-col'>
                <h1 className='text-lg'>Rate the product</h1>
                <div className='mt-1 flex gap-1'>
                    <GoStar className='text-medium-blue' />
                    <GoStar className='text-medium-blue' />
                    <GoStar className='text-medium-blue' />
                    <MdOutlineStarOutline className='text-medium-blue' />
                    <MdOutlineStarOutline className='text-medium-blue' />
                </div>
            </div>
            <div className='mt-2 flex flex-col gap-7'>
                <h4>Review</h4>
                <textarea className='p-2 placeholder-black text-black outline-none border-2 border-gray-300 h-40 w-4/5 rounded' placeholder='How do you feel about this product' />
                <button className='border-2 border-Dark-blue text-white font-medium h-8 w-2/5 bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue'>Submit</button>
            </div>
        </div>
    </div>
    );
}

export default ProductRB;
