import React from 'react'
import Digital from '../../images/digital.jpg'

function DigitalScore() {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-5 lg:gap-10 mx-auto pt-16 px-5 md:px-10 lg:px-20'>
            <div className=''>
                <img src={Digital} />
            </div>
            <div className='flex flex-col text-center md:text-left'>
                <h3 className='font-bold text-xl md:text-2xl lg:text-3xl pb-1 md:pb-3'>Your own digital score</h3>
                <p className='text-lg md:text-xl leading-6 md:leading-7'>
                    facilitate your business growth with a robust clientele
                </p>
            </div>
        </div>
    )
}

export default DigitalScore
