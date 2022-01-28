import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './imagesCard';
import Product from './Product'
import Review from './Review';
import drink1 from "../../images/drink1.png";
import drink2 from "../../images/drink2.png";
import drink3 from "../../images/drink3.png";


export default function Productspopup() {

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50'>
            <div className='mx-2 px-2 md:px-8 lg:px-20 bg-white rounded-md pt-3 pb-8 w-full md:w-3/5 flex flex-col gap-2'>
                <div className='text-xl font-semibold text-right'>X</div>
                <Carousel>
                    <Card number={<img src={drink1} alt='drink1' />} />
                    <Card number={<img src={drink2} alt='drink2' />} />
                    <Card number={<img src={drink3} alt='drink3' />} />
                </Carousel>
                <div className='mt-1'>
                    <Product />
                </div>
                <div className='mt-2'>
                    <h1 className='text-lg font-semibold'>Product ratings & Reviews</h1>
                    <div className='mt-1'>
                        <Review />
                    </div>
                </div>
                <div className='mt-10 mb-2 flex items-center justify-center'>
                    <button className='border-2 border-Dark-blue text-white font-medium h-8 w-2/5 bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
