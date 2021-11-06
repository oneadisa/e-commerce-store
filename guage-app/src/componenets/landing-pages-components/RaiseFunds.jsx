import React from 'react'
import Raise from '../../images/raise.jpg'

function RaiseFunds() {
    return (
        <div className='flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-10 mx-auto px-5 md:px-10 lg:px-20'>
            <div className='flex flex-col text-center md:text-left'>
                <h3 className='font-bold text-xl md:text-2xl lg:text-3xl pb-1 md:pb-3'>Raise funds</h3>
                <p className='text-lg md:text-xl leading-6 md:leading-7'>
                    Raise capital to finance your business 
                    operations in exchange for equilty or 
                    as non-interest loans.
                </p>
            </div>

            <div className='w-full'>
                <img src={Raise} />
            </div>
        </div>
    )
}

export default RaiseFunds
