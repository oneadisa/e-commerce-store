import React from 'react'
import { GoChevronLeft } from 'react-icons/go';

function Frame4() {
    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50'>
            <div className='mx-2 pl-6 md:pl-20 pr-3 md:pr-10 bg-white pt-2 pb-10 w-full md:w-4/5 flex flex-col gap-5'>
                <div className='flex items-center py-4 border-b border-gray-400'>
                    <GoChevronLeft />
                    <h1 className='text-xl font-semibold'>$1000</h1>
                </div>
                <div className='text-lg font-medium'>
                    <h3>This category is avaliable to all businesses including unregistered or sole propietorships.</h3>
                    <h3>This category of funding can only raised as a loan. The requirements to raise these category are:</h3>
                </div>
                <div className='flex flex-col gap-2 text-base'>
                    <p>I. A minimum of 20 customers on Gaged.</p>
                    <p>II. You should select a repayment plan for loans.</p>
                    <p>III. Upload an introductory video of the organization and stating the purpose of the funding.</p>
                    <p>IV. You are encouraged  offer a percentage of your profit to lenders.</p>
                    <p>V. You must have 15 unique lenders from your private network participate in the campaign before your campaign can be publicly listed on Gaged.</p>
                </div>
            </div>      
        </div>
    )
}

export default Frame4
