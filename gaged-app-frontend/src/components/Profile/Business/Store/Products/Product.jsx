import React from 'react';
import { GoStar } from 'react-icons/go';
import { MdOutlineStarOutline } from 'react-icons/md';

function Product() {
  return (
            <div>
                <div className='my-1 flex justify-between text-lg font-semibold'>
                    <h2>Product Name</h2>
                    <p>$400</p>
                </div>
                <p className='md:w-3/4'>Product description: This is a drink brewed for all occasion.</p>
                <div className='mt-1 flex gap-1'>
                    <GoStar className='text-medium-blue' />
                    <GoStar className='text-medium-blue' />
                    <GoStar className='text-medium-blue' />
                    <MdOutlineStarOutline className='text-medium-blue' />
                    <MdOutlineStarOutline className='text-medium-blue' />
                </div>
                <div className='my-5 md:w-3/4'>
                    <p>Product details:</p>
                    <p>This is a drink brewed for all occasion, specifically to delight your taste buds</p>
                </div>
            </div>
        );
}

export default Product;
