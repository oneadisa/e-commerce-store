import React from 'react'
import Invest from '../../images/invest.jpg'

function Investments() {
    return (
        <div className='flex flex-col md:flex-row gap-8 px-5 pt-16 md:px-10 lg:px-20 md:gap-5 lg:gap-10 mx-auto'>
            <div className='flex flex-col text-center md:text-left'>
                <h3 className='font-bold text-xl md:text-2xl lg:text-3xl pb-1 md:pb-3'>Invest in the you brands trust</h3>
                <p className='text-lg md:text-xl leading-6 md:leading-7'>
                    Earn decents returns on your capital
                    by investing in the business you trust.
                </p>
            </div>

            <div className=''>
                <img src={Invest} />
            </div>
        </div>
    )
}

export default Investments
