import React,{useState} from 'react'
import Header from './Header'
import DashBoard from './DashBoard'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Card from './Card'


function Wallet() {

    const [open, setOpen] = useState(false);

    const [filter, setFilter] = useState('Date');

    return (
        <div className="mx-auto">
            <Header 
                handleNav = {() => setOpen(!open)}
                button = {open ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
            />
            <div className="lg:bg-magenta-blue lg:px-4">
                <div className="block lg:flex lg:space-x-32">
                    <div className='hidden lg:block'>
                        <DashBoard />
                    </div>
                    <div className='lg:hidden'>
                        {open && <DashBoard />}
                    </div>
                    <div className="bg-white py-10 lg:py-20 mb-24 px-2 md:px-4 lg:px-5 lg:w-4/5">
                        <h2 className='text-2xl font-medium'>My Cards</h2>
                        <div className='mt-3 pb-10 flex flex-col gap-5'>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='lg:w-2/5 bg-medium-blue px-5 pt-7 pb-7 lg:pb-0 rounded-lg'>
                                    <p className='text-sm text-white'>BALANCE</p>
                                    <h3 className='text-3xl font-semibold text-white'>$15,000</h3>
                                    <p className='mt-7 text-sm text-white'>ACCOUNT NAME</p>
                                    <div className='mt-14 flex justify-between'>
                                        <button className='w-28 h-10 border border-white text-white rounded text-base font-medium hover:text-Dark-blue hover:bg-white'>Fund wallet</button>
                                        <button className='w-28 h-10 border border-white text-white rounded text-base font-medium hover:text-Dark-blue hover:bg-white'>Withdraw</button>
                                    </div>
                                </div>
                                <div className='lg:w-3/5 md:mt-1 border-2 px-2 lg:px-4 py-6 flex flex-col md:flex-row rounded-lg'>
                                    <div className='md:w-1/2 border-b md:border-b-0 md:border-r border-black pb-5 md:pb-0 md:pr-3 md:pr-6'>
                                        <div className='flex justify-between text-sm font-medium text-gray-400'>
                                            <p>LAST PAYOUT</p>
                                            <p>May 17, 2021</p>
                                        </div>
                                        <h3 className='my-3 text-4xl font-semibold'>$5,000</h3>
                                        <div className='my-4 py-1 w-14 rounded-full text-sm text-center text-green-900 font-medium bg-green-200 '>Paid</div>
                                        <button className='mt-14 text-base font-medium text-medium-blue hover:text-red-500'>View transaction</button>
                                    </div>
                                    <div className='md:w-1/2 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pr-3 md:pl-6'>
                                        <div className='flex justify-between text-sm font-medium text-gray-400'>
                                            <p>NEXT PAYOUT</p>
                                            <p>June 18, 2021</p>
                                        </div>
                                        <h3 className='my-3 text-4xl font-semibold'>$2,300</h3>
                                        <div className='my-4 py-1 w-20 rounded-full text-sm text-center text-brown font-medium bg-light-orange'>Pending</div>
                                        <button className='mt-14 text-base font-medium text-medium-blue hover:text-red-500'>View transaction</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-7'>
                                <div className='lg:w-4/6'>
                                    <h3 className='text-lg font-medium'>Transactions</h3>
                                    <div className="mt-4 lg:mt-2 flex w-full">
                                        <div className="flex items-center border-2 border-gray-300 border-r">
                                            <Menu as="div" className="">
                                                <Menu.Button className='flex w-32 md:w-48 items-center justify-center'>
                                                    <div className="flex text-base font-medium text-base font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                                        {filter}
                                                    </div>
                                                    <div className="">
                                                        <ChevronDownIcon
                                                        className="w-6 h-6 text-violet-200 hover:text-violet-100"
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu className="absolute cursor-pointer flex flex-col gap-4 text-sm font-medium w-28 mt-3 pt-2 pb-4 pl-2 pr-4 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div>
                                                            <div onClick={() => setFilter('Date')} className="hover:text-blue-600">
                                                                Date
                                                            </div>
                                                            <div onClick={() => setFilter('Amount')} className="hover:text-blue-600">
                                                                Amount
                                                            </div>
                                                            <div onClick={() => setFilter('Store')} className="hover:text-blue-600">
                                                                Store
                                                            </div>
                                                        </div>
                                                    </Menu>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <input placeholder='Search' className="border-2 border-l border-gray-300 w-full h-10 pl-3 outline-none" />
                                    </div>
                                    <div className='mt-3 flex justify-between w-full'>
                                        <p className='text-base font-medium'>Date</p>
                                        <p className='text-base font-medium'>Description</p>
                                        <p className='text-base font-medium'>Amount</p>
                                        <p className='text-base font-medium'>Charges</p>
                                        <p className='text-base font-medium'>Total</p>
                                        <p className='text-base font-medium'>Status</p>
                                    </div>
                                </div>
                                <div className='lg:w-2/6'>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='text-lg font-medium'>Payment methods</h3>
                                        <button className='text-sm text-Dark-blue font-medium hover:text-red-500'>Add new</button>
                                    </div>
                                    <div className='mt-2 border-2 border-gray-300 pt-3 pb-6 px-4'>
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
