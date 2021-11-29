/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import Logof from '../../images/logo-footer.jpg'
import analytics from '../../images/analytics.png'
import wallet from '../../images/wallet.png'
import store from '../../images/store.png'
import settings from '../../images/settings.png'
import dashboard from '../../images/dashboard.png'
import campaign from '../../images/campaign.png'

function SettingsBank() {
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
                    <input className='w-28 md:w-56 lg:w-96 outline-none lg:pl-5' />
                </div>
                <div className='flex gap-2 lg:gap-10 lg:pr-28 ml-auto'>
                    <div>
                        <p className='text-xl font-normal text-white mt-1'>Cart</p>
                    </div>
                    <div className='w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1' />
                </div>
            </head>
            <div className='lg:bg-magenta-blue lg:px-5 h-full'>
                <div className='block lg:flex lg:space-x-36'>
                    <ul className={"w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-12 lg:block" + ( open === true ? ' ' : ' hidden ' ) }>
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
                        <li className='my-3 p-3'>
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
                        <li className='my-3 p-3 bg-white rounded text-Dark-blue mr-10 lg:mr-0'>
                            <a href='#' className='flex gap-3'>
                                <img src={settings} className='w-5 h-5 mt-1' />
                                <p>Settings</p>
                            </a>
                        </li>
                    </ul>
                    <div className='flex flex-col lg:w-4/5 mr-5'>
                        <div className='px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12'>
                            <div className='flex gap-5 lg:gap-10'>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>General</p>
                                <p className='p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue'>Bank Information</p>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Store settings</p>
                            </div>
                        </div>
                        <div className='px-3 lg:px-7 pt-5 pb-8 lg:py-5 lg:pb-14 mt-4 lg:mt-5 lg:mb-14 bg-white'>
                            <h2 className='text-2xl font-semibold'>Set up and verify your your bank account</h2>
                            <div className='my-5'>
                                <div className='flex flex-col gap-2 md:w-3/4'>
                                    <label className='text-lg font-normal'>Select Bank</label>
                                    <input placeholder='Select Bank' className='border-2 py-2 pl-5 rounded outline-none' />
                                </div>
                                <div className='flex flex-col gap-4 md:flex-row mt-3'>
                                    <div className='flex flex-col gap-2 md:w-2/5'>
                                        <label className='text-lg font-normal'>Account Name</label>
                                        <input placeholder='Account Name' className='border-2 py-2 pl-5 rounded outline-none' />
                                    </div>
                                    <div className='flex flex-col gap-2 md:w-4/12'>
                                        <label className='text-lg font-normal'>Account Number</label>
                                        <input placeholder='Account Number' className='border-2 py-2 pl-5 rounded outline-none' />
                                    </div>
                                </div>
                                <div className='mt-12 md:mt-16'>
                                    <button className='px-10 md:px-16 py-2 bg-Dark-blue text-white border-2 rounded-md hover:bg-white hover:text-Dark-blue'>Verify account</button>
                                    <p className='mt-2 text-sm font-medium'>Verification may take 2-3 days business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsBank
