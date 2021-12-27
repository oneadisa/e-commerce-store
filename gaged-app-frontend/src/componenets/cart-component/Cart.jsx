import React from 'react'
import noimage from '../../images/noimage.svg'
import Header from '../addnew-campaign-component/Header'

function Cart() {
    return (
        <div className='mx-auto'>
            <Header />
            <div className='bg-magenta-blue py-5 md:py-12 px-1 md:px-8'>
                <div className='px-1 md:px-5 py-3 md:py-5 bg-white'>
                    <div className='flex flex-col'>
                        <div className='pb-1 text-xl font-semibold border-b-2 border-gray-400 '>
                            <h2>Products from Vibes Store</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-5'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img  src={noimage} alt=''/>
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12 md:gap-20 lg:gap-36 w-auto md:w-3/5 lg:w-auto'>
                                <div className='pt-3'>
                                    <div className='text-lg font-medium pb-3'>
                                        <h5>Summary</h5>
                                    </div>
                                    <div className='flex flex-col pl-1 lg:pr-8 gap-2'>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-t-2 border-gray-400 mt-3'>
                                    <div className='text-lg font-medium my-5 text-right pr-14 md:pr-20 lg:pr-3'>
                                        Total price
                                    </div>
                                    <div className='mt-6'>
                                        <button className='h-12 w-full mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium rounded hover:bg-white hover:text-Dark-blue'>
                                            Proceed to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-10'>
                        <div className='pb-1 text-xl font-semibold border-b-2 border-gray-400 '>
                            <h2>Products from Alat Gadgets</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-5'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12 md:gap-20 lg:gap-36 w-auto md:w-3/5 lg:w-auto'>
                                <div className='pt-3'>
                                    <div className='text-lg font-medium pb-3'>
                                        <h5>Summary</h5>
                                    </div>
                                    <div className='flex flex-col pl-1 lg:pr-8 gap-2'>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-t-2 border-gray-400 mt-3'>
                                    <div className='text-lg font-medium my-5 text-right pr-14 md:pr-20 lg:pr-3'>
                                        Total price
                                    </div>
                                    <div className='mt-6'>
                                        <button className='h-12 w-full mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium rounded hover:bg-white hover:text-Dark-blue'>
                                            Proceed to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-10'>
                        <div className='pb-1 text-xl font-semibold border-b-2 border-gray-400 '>
                            <h2>Products from The Fluffy Shop</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-5'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img  src={noimage} alt='' />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24 border-b-2 border-gray-400 pb-5'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 md:gap-5 py-3'>
                                    <div>
                                        <img alt='' src={noimage} />
                                    </div>
                                    <div className='flex gap-10 lg:gap-24'>
                                        <div className='flex flex-col gap-5 md:gap-10'>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg font-medium'>Name of product</h4>
                                                <p className='text-base font-normal'>Description</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>-</div>
                                                <div className=' h-5 w-5 flex justify-center items-center text-sm font-medium'>1</div>
                                                <div className='border-2 border-gray-400 h-5 w-5 flex justify-center items-center pb-1 text-lg font-medium'>+</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium'>Price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12 md:gap-20 lg:gap-36 w-auto md:w-3/5 lg:w-auto'>
                                <div className='pt-3'>
                                    <div className='text-lg font-medium pb-3'>
                                        <h5>Summary</h5>
                                    </div>
                                    <div className='flex flex-col pl-1 lg:pr-8 gap-2'>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                        <div className='flex gap-14'>
                                            <p>Name of product</p>
                                            <p>Qty</p>
                                            <p>Total</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-t-2 border-gray-400 mt-3'>
                                    <div className='text-lg font-medium my-5 text-right pr-14 md:pr-20 lg:pr-3'>
                                        Total price
                                    </div>
                                    <div className='mt-6'>
                                        <button className='h-12 w-full mt-2 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium rounded hover:bg-white hover:text-Dark-blue'>
                                            Proceed to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-20 lg:text-right'>
                        <button className='h-12 w-full lg:w-1/3 font-poppins border-2 border-Dark-blue bg-Dark-blue text-white text-base md:text-lg font-medium rounded hover:bg-white hover:text-Dark-blue'>
                            Proceed to checkout all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
