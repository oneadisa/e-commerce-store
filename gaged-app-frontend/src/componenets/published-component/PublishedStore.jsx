/* eslint-disable jsx-a11y/alt-text */
<<<<<<< HEAD
import React from 'react'
import Header from './Header'
import drink1 from '../../images/drink1.png'
import drink2 from '../../images/drink2.png'
import drink3 from '../../images/drink3.png'

function PublishedStore() {
    return (
        <div className='mx-auto'>
            <Header />
            <div className='items-center text-center'>
                <div className='bg-gray-400 py-12 px-4'>
                    <h1 className='text-3xl md:text-3xl lg:text-3xl font-bold'>Store Name</h1>
                    <p className='text-xl my-3 lg:my-2 font-medium'>Tagline, motto or description</p>
                    <div className='mt-4'>
                        <input placeholder='search' className='w-full bg-white md:w-3/4 h-10 rounded pl-3 outline-none' />
                    </div>
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 text-left py-6 px-4 lg:py-10 lg:px-20 bg-magenta-blue'>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink1} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink2} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink3} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink1} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink2} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink3} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink1} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink2} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-5'>
                            <img src={drink3} className='w-full' />
                            <div className='flex justify-between my-2'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>Name of Product</h4>
                                    <p className='font-medium'>subtitle</p>
                                </div>
                                <div className='mt-2 font-bold'>
                                    <h4>$50.00</h4>
                                </div>
                            </div>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
=======
import React from "react";
import Logof from "../../images/logo-footer.jpg";
import drink1 from "../../images/drink1.png";
import drink2 from "../../images/drink2.png";
import drink3 from "../../images/drink3.png";

function PublishedStore() {
  return (
    <div className="mx-auto">
      <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-40 h-10">
          <div>
            <img src={Logof} alt="" className="w-4/5 lg:w-full h-full" />
          </div>
          <input className="w-28 md:w-60 lg:w-96 outline-none pl-1 lg:pl-5" />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart(2)</p>
          </div>
          <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="items-center text-center">
        <div className="bg-gray-400 py-12 px-4">
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold">
            Store Name
          </h1>
          <p className="text-xl my-3 lg:my-2 font-medium">
            Tagline, motto or description
          </p>
          <div className="mt-4">
            <input
              placeholder="search"
              className="w-full bg-white md:w-3/4 h-10 rounded pl-3 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 text-left py-6 px-4 lg:py-10 lg:px-20 bg-magenta-blue">
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink1} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink2} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink3} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink1} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink2} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink3} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink1} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink2} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="mb-5">
              <img src={drink3} className="w-full" />
              <div className="flex justify-between my-2">
                <div className="flex flex-col">
                  <h4 className="font-bold">Name of Product</h4>
                  <p className="font-medium">subtitle</p>
                </div>
                <div className="mt-2 font-bold">
                  <h4>$50.00</h4>
>>>>>>> main
                </div>
              </div>
            </div>
            <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishedStore;
