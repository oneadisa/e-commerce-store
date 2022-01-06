/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import Header from './Header';
import DashBoard from './DashBoard'

function SettingsBank() {
    const [open, setOpen] = useState(false)

    return (
        <div className='mx-auto'>
            <Header 
                handleNav = {() => setOpen(!open)}
                button = {open ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
            />
            <div className='lg:bg-magenta-blue lg:px-2 h-full'>
                <div className='block lg:flex lg:space-x-36'>
                    <div className='hidden lg:block'>
                        <DashBoard />
                    </div>
                    <div className='lg:hidden'>
                        {open && <DashBoard />}
                    </div>
                    <div className='flex flex-col lg:w-4/5'>
                        <div className='px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12'>
                            <div className='flex gap-5 lg:gap-10'>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>General</p>
                                <p className='p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue'>Bank Information</p>
                                <p className='p-1 lg:p-2 cursor-pointer hover:text-Dark-blue'>Store settings</p>
                            </div>
                        </div>
                        <div className='px-3 lg:px-7 pt-5 pb-8 lg:py-5 lg:pb-12 mt-4 lg:mt-5 lg:mb-14 bg-white'>
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
                                <div className='mt-12 md:mt-16 pb-8 border-b-gray-300 border-b-2'>
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
