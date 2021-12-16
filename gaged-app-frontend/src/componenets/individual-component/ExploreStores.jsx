/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import vibe from '../../images/vibe.png'
import password from '../../images/password.png'
import alot from '../../images/alot.png'
import volunteer from '../../images/volunteer.png'
import akhlaq from '../../images/akhlaq.png'
import duties from '../../images/duties.png'
import foodsupply from '../../images/food-supply.png'
import queen from '../../images/queen.png'
import sincerity from '../../images/sincerity.png'
import Header0 from './Header0'

function ExploreStores() {
    return (
        <div className='mx-auto'>
            <Header0 />
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
