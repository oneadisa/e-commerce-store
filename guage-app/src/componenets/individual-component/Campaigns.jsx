import React, { useState } from 'react'
import Logof from '../../images/logo-footer.jpg'
import alot from '../../images/alot.png'
import wallet from '../../images/wallet.png'
import vibe from '../../images/vibe.png'
import password from '../../images/password.png'
import settings from '../../images/settings.png'
import dashboard from '../../images/dashboard.png'
import campaign from '../../images/campaign.png'

function Campaigns() {
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
                    <div className='w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1' />
                </div>
            </head>
            <div className='lg:bg-magenta-blue lg:px-4 h-full'>
                <div className='block lg:flex lg:space-x-36'>
                    <ul className={"w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:block" + ( open === true ? ' ' : ' hidden ' ) }>
                        <li className='my-3 p-3'>
                            <a href='#' className='flex gap-3'>
                                <img src={dashboard} className='w-5 h-5 mt-1' />
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className='my-3 p-3 bg-white rounded text-Dark-blue mr-10 lg:-mr-5'>
                            <a href='#' className='flex gap-3'>
                                <img src={campaign} className='w-5 h-5 mt-1' />
                                <p>Campaigns</p>
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
                    <div className='flex flex-col gap-10 lg:my-7 lg:ml-20 lg:pl-2 lg:pr-16'>
                        <div className='flex flex-col bg-white px-2 md:px-4 lg:px-8 pt-6 pb-8'>
                            <h1 className='text-2xl font-bold'>Businesses near you.</h1>
                            <p className='text-lg font-medium py-2'>Explore the businesses in your locality. Shop with ease.</p>
                            <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8'>
                                <div className='flex flex-col'>
                                    <div className='mb-20'>
                                        <img src={vibe} className='w-full h-fit' />
                                        <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mb-20'>
                                        <img src={alot} className='w-full' />
                                        <h4 className='text-lg font-bold my-2'>Alat Gadgets</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <button className='w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mb-20'>
                                        <img src={password} className='w-full' />
                                        <h4 className='text-lg font-bold my-2'>password</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <button className='w-full border bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                            </div>
                            <div className='ml-auto mt-14 mr-4'>
                                <button className='text-Dark-blue p-2 rounded text-base font-bold ml-auto hover:bg-Dark-blue hover:text-white'>See more</button>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white px-2 md:px-4 lg:px-8 pt-6 pb-8'>
                            <h1 className='text-2xl font-bold'>Live campaigns near you</h1>
                            <p className='text-lg font-medium py-2'>Explore fundraising campaigns near you. Invest with ease, earn decent return on your capital while you help businesses near you achieve their growth objective</p>
                            <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8'>
                                <div className='flex flex-col'>
                                    <div className='mb-3'>
                                        <img src={vibe} className='w-full h-fit' />
                                        <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <div className='mb-7'>
                                        <div className='flex justify-between'>
                                            <p className='font-medium text-lg'>$40,000 raised</p>
                                            <p className='text-lg'>$150,000</p>
                                        </div>
                                        <div className='py-2'>
                                            <div className='h-2 w-full bg-Dark-grey rounded'>
                                                <div className='h-full w-1/3 bg-Dark-blue rounded' />
                                            </div>
                                        </div>
                                        <p className='text-lg'>1 week left</p>
                                    </div>
                                    <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mb-3'>
                                        <img src={alot} className='w-full' />
                                        <h4 className='text-lg font-bold my-2'>Alat Gadgets</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <div className='mb-7'>
                                        <div className='flex justify-between'>
                                            <p className='font-medium text-lg'>$40,000 raised</p>
                                            <p className='text-lg'>$150,000</p>
                                        </div>
                                        <div className='py-2'>
                                            <div className='h-2 w-full bg-Dark-grey rounded'>
                                                <div className='h-full w-1/3 bg-Dark-blue rounded' />
                                            </div>
                                        </div>
                                        <p className='text-lg'>1 week left</p>
                                    </div>
                                    <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mb-3'>
                                        <img src={password} className='w-full' />
                                        <h4 className='text-lg font-bold my-2'>password</h4>
                                        <p className='text-base leading-5'>
                                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                                        </p>
                                    </div>
                                    <div className='mb-7'>
                                        <div className='flex justify-between'>
                                            <p className='font-medium text-lg'>$40,000 raised</p>
                                            <p className='text-lg'>$150,000</p>
                                        </div>
                                        <div className='py-2'>
                                            <div className='h-2 w-full bg-Dark-grey rounded'>
                                                <div className='h-full w-1/3 bg-Dark-blue rounded' />
                                            </div>
                                        </div>
                                        <p className='text-lg'>1 week left</p>
                                    </div>
                                    <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                                </div>
                            </div>
                            <div className='ml-auto mt-14 mr-4'>
                                <button className='text-Dark-blue p-2 rounded text-base font-bold ml-auto hover:bg-Dark-blue hover:text-white'>See more</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Campaigns
