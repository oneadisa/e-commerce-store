import React, { useState } from 'react'
import Logof from '../../images/logo-footer.jpg'
import analytics from '../../images/analytics.png'
import wallet from '../../images/wallet.png'
import store from '../../images/store.png'
import settings from '../../images/settings.png'
import dashboard from '../../images/dashboard.png'
import campaign from '../../images/campaign.png'

function ProductsAll() {
    const [open, setOpen] = useState(false)

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <div className='mx-auto'>
            <head className='flex justify-between bg-medium-blue px-2 lg:px-5 py-2'>
                <div className='flex space-x-5 lg:space-x-40 h-10'>
                    <div className='flex'>
                        <div className='text-2xl lg:hidden text-white' onClick = {handleNav}>
                            {open === true ? (<i class="fas fa-times"></i>) : (<i class="fas fa-bars"></i>) }
                        </div>
                        <img src={Logof} className='w-4/5 lg:w-full' />
                    </div>
                    <input className='w-28 lg:block lg:w-96 outline-none pl-1 lg:pl-5' />
                </div>
                <div className='flex gap-2 lg:gap-10 lg:pr-28 ml-auto'>
                    <div>
                        <p className='text-xl font-normal text-white mt-1'>Cart</p>
                    </div>
                    <div className='w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1' />
                </div>
            </head>
            <div className='lg:bg-magenta-blue lg:px-4 h-screen'>
                <div className='block lg:flex lg:space-x-36'>
                    <ul className={"w-1/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-16 lg:block" + ( open === true ? ' ' : ' hidden ' ) }>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={dashboard} className='w-5 h-5 mt-1' />
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={campaign} className='w-5 h-5 mt-1' />
                                <p>Campaigns</p>
                            </a>
                        </li>
                        <li className='my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:mr-0'>
                            <a href='#' className='flex gap-3'>
                                <img src={store} className='w-5 h-5 mt-1' />
                                <p>Store</p>
                            </a>
                        </li>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={analytics} className='w-5 h-5 mt-1' />
                                <p>Analytics</p>
                            </a>
                        </li>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={wallet} className='w-5 h-5 mt-1' />
                                <p>Wallet</p>
                            </a>
                        </li>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={settings} className='w-5 h-5 mt-1' />
                                <p>Settings</p>
                            </a>
                        </li>
                    </ul>
                    <div className='flex flex-col lg:space-y-10 lg:w-4/5'>
                        <div className='flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5'>
                            <div className='flex justify-between lg:gap-10'>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Overview</p>
                                <p className='p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue'>Products</p>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Orders</p>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Customers</p>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Reviews</p>
                            </div>
                            <button className='border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white'>Visit store</button>
                        </div>
                        <div className='flex flex-col p-5 mt-10 bg-white h-auto lg:h-96'>
                            <div className='flex'>
                                <h3 className='font-semibold text-xl mt-1 lg:mt-2'>All Products</h3>
                                <button className='ml-auto bg-Dark-blue border border-Dark-blue text-white py-2 px-4 font-normal text-base hover:bg-white hover:text-Dark-blue'>New Product</button>
                            </div>
                            <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2'>
                                <p className='border-b border-black lg:border-0 py-2'>#</p>
                                <p className='border-b border-black lg:border-0 py-2'>PRODUCT NAME</p>
                                <p className='border-b border-black lg:border-0 py-2'>CATEGORY</p>
                                <p className='border-b border-black lg:border-0 py-2'>STOCK</p>
                                <p className='border-b border-black lg:border-0 py-2'>PRICE</p>
                                <p className='border-b border-black lg:border-0 py-2'>STATUS</p>
                                <p className='border-b border-black lg:border-0 py-2'>ACTION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsAll
