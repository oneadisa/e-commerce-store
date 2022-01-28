import React from 'react';
import { GoStar } from 'react-icons/go';
import { MdOutlineStarOutline } from 'react-icons/md';

function Review() {
  return (
            <div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p>A very good product</p>
                        <div className='flex text-xs'>
                        <GoStar className='text-medium-blue' />
                        <GoStar className='text-medium-blue' />
                        <GoStar className='text-medium-blue' />
                        <GoStar className='text-medium-blue' />
                        <MdOutlineStarOutline className='text-medium-blue' />
                        </div>
                    </div>
                    <p>Michael Andrew</p>
                </div>
            </div>
        );
}

export default Review;
