import React, {useState} from 'react'
import Logof from '../../images/logo-footer.jpg'
import analytics from '../../images/analytics.png'
import wallet from '../../images/wallet.png'
import store from '../../images/store.png'
import settings from '../../images/settings.png'
import dashboard from '../../images/dashboard.png'
import campaign from '../../images/campaign.png'
import rectangle from '../../images/rectangle.svg'

function Campaign2() {

    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <div className='mx-auto'>
            <head className='flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2'>
                <div className='flex space-x-5 lg:space-x-24 h-10'>
                    <div className='flex'>
                        <div className='text-2xl lg:hidden text-white' onClick = {handleNav}>
                            {open === true ? (<i class="fas fa-times"></i>) : (<i class="fas fa-bars"></i>) }
                        </div>
                        <img src={Logof} className='w-4/5 lg:w-full' />
                    </div>
                    <input className='w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5' />
                </div>
                <div className='flex gap-2 lg:gap-10 lg:pr-28 ml-auto'>
                    <div>
                        <p className='text-xl font-normal text-white mt-1'>Cart</p>
                    </div>
                    <div className='w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1' />
                </div>
            </head>
            <div className='bg-magenta-blue h-full'>
                <div className='block lg:flex lg:space-x-24'>
                    <ul className={"w-2/3 lg:w-32 lg:pl-4 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-10 lg:block" + ( open === true ? ' ' : ' hidden ' ) }>
                        <li className='mt-1 mb-3 pt-5 lg:pt-0 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={dashboard} className='w-5 h-5 mt-1' />
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className='my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:-mr-12'>
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
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={settings} className='w-5 h-5 mt-1' />
                                <p>Settings</p>
                            </a>
                        </li>
                    </ul>
                    <div className='py-5 md:py-10 lg:py-0 lg:my-10 w-full px-2'>
                        <div className='flex flex-col md:flex-row gap-5 justify-between'>
                            <h1 className='text-3xl font-bold text-medium-blue'>Fundraising Campaigns</h1>
                            <button className='lg:mr-10 w-36 h-10 bg-white border-2 border-black hover:text-white hover:bg-Dark-blue hover:border-white'>New campaign</button>
                        </div>
                        <div className='my-3'>
                            <div className='flex justify-between md:justify-start border-b-2 border-black'>
                                <div className='text-lg font-semibold text-gray-400 px-4 md:px-10 py-1'>
                                    <h3>All</h3>
                                </div>
                                <div className='text-lg font-semibold  border-b-4 border-Dark-blue px-4 md:px-10 py-1'>
                                    <h3>LIVE</h3>
                                </div>
                                <div className='text-lg font-semibold text-gray-400 px-4 md:px-10 py-1'>
                                    <h3>COMPLETED</h3>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-5 md:gap-2 lg:gap-5 my-10 lg:px-1'>
                                <div className='flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5'>
                                    <div>
                                        <img src={rectangle} className='w-full' />
                                        <h3 className='text-xl font-medium mt-5'>Alleyway Security Fundraiser</h3>
                                        <p className='text-base leading-5'>
                                            The improved security measures at Wychurst are estimated to cost £20,000. Any extra...
                                        </p>
                                    </div>
                                    <div className="py-2">
                                        <div className="h-2 w-full bg-Dark-grey rounded">
                                            <div className="h-full w-1/2 bg-Dark-blue rounded" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-base'>55% raised</p>
                                        <p className='text-base text-red-500'>7 days left</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5'>
                                    <div>
                                        <img src={rectangle} className='w-full' />
                                        <h3 className='text-xl font-medium mt-5'>Alleyway Security Fundraiser</h3>
                                        <p className='text-base leading-5'>
                                            The improved security measures at Wychurst are estimated to cost £20,000. Any extra...
                                        </p>
                                    </div>
                                    <div className="py-2">
                                        <div className="h-2 w-full bg-Dark-grey rounded">
                                            <div className="h-full w-1/2 bg-Dark-blue rounded" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-base'>55% raised</p>
                                        <p className='text-base text-red-500'>7 days left</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5'>
                                    <div>
                                        <img src={rectangle} className='w-full' />
                                        <h3 className='text-xl font-medium mt-5'>Alleyway Security Fundraiser</h3>
                                        <p className='text-base leading-5'>
                                            The improved security measures at Wychurst are estimated to cost £20,000. Any extra...
                                        </p>
                                    </div>
                                    <div className="py-2">
                                        <div className="h-2 w-full bg-Dark-grey rounded">
                                            <div className="h-full w-1/2 bg-Dark-blue rounded" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-base'>55% raised</p>
                                        <p className='text-base text-red-500'>7 days left</p>
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

export default Campaign2
