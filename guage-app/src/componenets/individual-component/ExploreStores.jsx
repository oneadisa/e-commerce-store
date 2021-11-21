/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logof from '../../images/logo-footer.jpg'
import vibe from '../../images/vibe.png'
import password from '../../images/password.png'
import alot from '../../images/alot.png'
import volunteer from '../../images/volunteer.png'
import akhlaq from '../../images/akhlaq.png'
import duties from '../../images/duties.png'
import foodsupply from '../../images/food-supply.png'
import queen from '../../images/queen.png'
import sincerity from '../../images/sincerity.png'

function ExploreStores() {
    return (
        <div className='mx-auto'>
            <head className='flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2'>
                <div className='flex space-x-5 lg:space-x-40 h-10'>
                    <div>
                        <img alt='' src={Logof} className='w-4/5 lg:w-full h-full' />
                    </div>
                    <input className='w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5' />
                </div>
                <div className='flex gap-2 lg:gap-10 lg:pr-28 ml-auto'>
                    <div>
                        <p className='text-xl font-normal text-white mt-1'>Cart</p>
                    </div>
                    <div className='w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1' />
                </div>
            </head>
            <div className='bg-magenta-blue py-14 px-3 lg:px-20 items-center text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Explore  Stores</h1>
                <p className='text-base md:text-lg lg:text-lg my-3'>Search and discover the digital stores of businesses near you</p>
                <div>
                    <input placeholder='search' className='w-full md:w-3/4 h-10 rounded pl-3 outline-none' />
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 text-left my-10'>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={vibe} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={alot} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={password} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={sincerity} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={akhlaq} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Alat Gadgets</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={queen} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>password</h4>
                            <p className='text-base leading-5'>
                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={foodsupply} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>foodsupply</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={volunteer} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Volunteer</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={duties} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Duties</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreStores
