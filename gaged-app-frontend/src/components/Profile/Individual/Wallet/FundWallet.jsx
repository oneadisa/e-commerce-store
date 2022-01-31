import React, {useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function FundWallet() {

    const [duration, setDuration] = useState('Select method');

    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50'>
            <div className='mx-2 md:mx-0 bg-white rounded-md pt-10 pb-24 w-full md:w-4/5 lg:w-1/2 flex flex-col items-center gap-3 '>
                <h2 className='text-xl font-semibold'>Fund wallet</h2>
                <div className='flex flex-col py-5 gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-base font-medium'>Amount</h4>
                        <input className='h-12 border-2 border-gray-400 w-80 md:w-96 outline-none pl-5' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-base font-medium'>Payment method</h4>
                        {/* <input className='h-12 border-2 w-80 md:w-96' /> */}
                        <div className="px-2 h-12 flex items-center w-80 md:w-96 border-2 border-gray-400">
                            <Menu as="div" className="w-96">
                            <Menu.Button className='flex w-full items-center '>
                                <div className="flex text-base font-medium text-gray-500 pl-3 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                {duration}
                                </div>
                                <div className="ml-auto">
                                <ChevronDownIcon
                                    className="mr-2 w-6 h-6 text-violet-200 hover:text-violet-100"
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
                                <Menu className="absolute cursor-pointer flex flex-col gap-2 text-sm font-medium w-56 mt-5 pt-5 pb-4 pl-3 pr-10 bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div>
                                    <div className="hover:text-blue-600 mb-1">
                                        Select a method
                                    </div>
                                    <div onClick={() => setDuration('Card')} className="hover:text-blue-600">
                                        Card 
                                    </div>
                                    <div onClick={() => setDuration('Bank')} className="hover:text-blue-600">
                                        Bank
                                    </div>
                                    <div onClick={() => setDuration('USSD')} className="hover:text-blue-600">
                                        USSD
                                    </div>
                                    <div onClick={() => setDuration('Mobile money')} className="hover:text-blue-600">
                                        Mobile money
                                    </div>
                                </div>
                                </Menu>
                            </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <button className='mt-3 border border-Dark-blue bg-Dark-blue text-white font-medium w-80 md:w-96 h-12 hover:bg-white hover:text-Dark-blue'>
                    Fund
                </button>
            </div>      
        </div>
    )
}

export default FundWallet
