import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import Logof from '../../images/logo-footer.jpg'
import analytics from '../../images/analytics.png'
import wallet from '../../images/wallet.png'
import store from '../../images/store.png'
import settings from '../../images/settings.png'
import dashboard from '../../images/dashboard.png'
import campaign from '../../images/campaign.png'

function ProductsNew() {
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)

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
            <div className='lg:bg-magenta-blue lg:px-4 h-full'>
                <div className='block lg:flex lg:space-x-36'>
                    <ul className={"w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-16 lg:block" + ( open === true ? ' ' : ' hidden ' ) }>
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
                        <div className='px-3 lg:px-8 py-0 lg:py-5 mt-4 lg:mt-10 bg-white'>
                            <h2 className='text-lg font-medium'>New Product</h2>
                            <div className='mt-5'>
                                <div className='flex flex-col space-y-4 lg:space-y-0 lg:space-x-2 lg:flex-row'>
                                    <div className='flex flex-col gap-6 border-2 pt-5 lg:pt-8 pb-9 lg:pb-12 px-3 lg:pl-6 lg:pr-14 lg:w-2/3'>
                                        <div className='flex flex-col gap-2'>
                                            <label className='text-lg font-normal text-Dark-grey'>Product title</label>
                                            <input className='border-2 h-10 outline-none pl-3' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label className='text-lg font-normal text-Dark-grey'>Short description</label>
                                            <input className='border-2 h-10 outline-none pl-3' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label className='text-lg font-normal text-Dark-grey'>Product details</label>
                                            <textarea className='border-2 h-32 outline-none' />
                                        </div>
                                    </div>
                                    <div className='flex gap-5 flex-col lg:w-1/3'>
                                        <div className='border-2 py-2'>
                                            <h4 className='text-lg font-medium px-3 py-1'>Publish product</h4>
                                            <div className='border-t-2 px-3 pt-3'>
                                                <p className='text-lg font-normal text-Dark-grey mb-3'>Product status</p>
                                                <div className="pb-5 flex gap-3">
                                                    <Switch checked={enabled} onChange={setEnabled}
                                                        className={`block bg-gray-400 rounded-full shadow border-2 border-transparent h-6 w-12 transition duration-200 flex ${ enabled ? "" : "justify-end bg-Dark-blue"}`}
                                                    >
                                                        <span
                                                        className="block h-full w-6 rounded-full bg-white"
                                                        />
                                                    </Switch>
                                                    <div>
                                                    <p className='text-lg font-normal text-Dark-grey mb-3'>Draft</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between mt-4'>
                                                    <button className='border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white '>Preview</button>
                                                    <button className='border py-2 px-2 bg-Dark-blue text-white hover:bg-white hover:text-Dark-blue'>Save product</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-2 h-48'>
                                            <div className='flex justify-between px-3 pt-2 pb-1'>
                                                <h4 className='text-lg font-medium'>Choose category</h4>
                                                <p className='text-base font-medium text-Dark-blue'>Add new</p>
                                            </div>
                                            <div className='border-t-2 pt-3 px-3'>
                                                <input className='border-2 w-full h-10 outline-none' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-2 mt-5 lg:w-2/3 px-3 lg:px-6 pt-6 pb-10'>
                                    <h2 className='text-lg font-medium'>Price and Quantity</h2>
                                    <div className='grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3 mt-4'>
                                        <div className='flex'>
                                            <div className='border-2 p-2 text-Dark-grey'>$</div>
                                            <input placeholder='Standard price' className='border-2 pl-4 lg:w-44 outline-none' />
                                        </div>
                                        <div className='flex'>
                                            <div className='border-2 p-2 text-Dark-grey'>$</div>
                                            <input placeholder='Discounted price' className='border-2 pl-4 lg:w-44 outline-none' />
                                        </div>
                                        <div className='flex'>
                                            <div className='border-2 p-2 text-Dark-grey'>$</div>
                                            <input placeholder='Cost price' className='border-2 pl-4 lg:w-44 outline-none' />
                                        </div>
                                    </div>
                                    <div className='mt-5 grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3'>
                                        <div className='flex flex-col'>
                                            <h4 className='text-lg font-medium'>Stock</h4>
                                            <input placeholder='Product count' className='border-2 lg:w-52 h-10 outline-none text-center' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-lg font-medium'>Unit</h4>
                                            <input placeholder='Product count' className='border-2 lg:w-52 h-10 outline-none text-center' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-lg font-medium'>SKU</h4>
                                            <input placeholder='Product SKU' className='border-2 lg:w-52 h-10 outline-none text-center' />
                                        </div>
                                    </div>
                                </div>
                                <div className='border-2 my-5 lg:w-2/3 px-6 pt-6'>
                                    <h2 className='text-lg font-medium'>Product images</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsNew
