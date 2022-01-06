/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import Header from './Header';
import DashBoard from './DashBoard'
import file from '../../images/file.png'
import { Select } from 'semantic-ui-react';

function SettingsGeneral() {
    const [open, setOpen] = useState(false);

    const identificationOptions = [
      { key: "nin", value: "nin", text: "National Identification Number(NIN)" },
      { key: "dl", value: "dl", text: "Driver's License" },
      { key: "ip", value: "ip", text: "International Passport" },
      { key: "pvc", value: "pvc", text: "Personal Voter's Card(PVC)" },
    ];

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
            <div className="flex flex-col lg:w-4/5">
              <div className="px-3 pt-2 text-base lg:text-lg font-medium bg-white lg:px-12">
                <div className="flex gap-5 lg:gap-10">
                  <p className="p-1 lg:p-2 cursor-pointer border-b-4 border-Dark-blue hover:text-Dark-blue">
                    General
                  </p>
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Bank Information
                  </p>
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Store settings
                  </p>
                </div>
              </div>
              <div className="px-3 lg:px-6 pt-5 pb-8 lg:py-5 lg:pb-14 mt-4 lg:mt-5 lg:mb-14 bg-white">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <div className="mt-5">
                  <div className="flex flex-col border-b-2 pb-7 md:pb-14">
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-5">
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">First Name</label>
                        <input
                          placeholder="First Name"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">Last Name</label>
                        <input
                          placeholder="Last Name"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:w-1/4">
                        <label className="text-lg font-normal">
                          Phone Number
                        </label>
                        <input
                          placeholder="Phone Number"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <label className="text-lg font-normal">Email Address</label>
                      <input
                        placeholder="Email Address"
                        className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-8">
                      <div className="flex flex-col gap-5 md:gap-10 md:w-2/5">
                        <div className="flex flex-col gap-2">
                          <label className="text-lg font-normal">
                            Means of Identification
                          </label>
                          {/* <input placeholder='Select' className='border-2 border-gray-200 rounded py-3 pl-5 outline-none' /> */}
                          <Select
                            placeholder="Select"
                            options={identificationOptions}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-lg font-normal">
                            Registration No.
                          </label>
                          <input
                            placeholder="registration number of valid ID"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          />
                        </div>
                      </div>


                      <div className="flex flex-col md:w-1/2">
                        <label className="text-lg font-normal">Upload ID</label>
                        <p className="text-sm font-medium">
                          Upload your valid means of ID
                        </p>
                        <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                          <img src={file} className="h-20 w-20" />
                          <div>
                            <input
                              type="file"
                              name="file"
                              multiple
                              className="sr-only"
                            />
                          </div>
                          <label className="text-base font-normal text-gray-700 mt-3">
                            Click to add document or drag
                            <br />
                            file here
                          </label>
                        </div>
                        <p className="text-sm text-center">
                          Your document must be no larger than 2Mb
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-10 border-b-2">
                    <h2 className="text-2xl font-semibold">
                      Business Information
                    </h2>
                    <div className="flex flex-col mt-5">
                      <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Name
                          </label>
                          <input
                            placeholder="Business Name"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Nature of Business
                          </label>
                          <input
                            placeholder="Nature of Business"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-3">
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Email
                          </label>
                          <input
                            placeholder="Email address"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:w-2/5">
                          <label className="text-lg font-normal">
                            Business Address
                          </label>
                          <input
                            placeholder="Business Address"
                            className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-10 border-b-2">
                    <h2 className="text-2xl font-semibold">Type of Business</h2>
                    <div className="flex flex-col mt-6 md:mt-5">
                      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                        <div className="flex gap-2 border border-gray-300 p-3 w-72">
                          <div className="h-7 w-7 bg-gray-400 rounded-full p-2">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <h4 className="text-lg font-normal">
                            Limited Liability Company
                          </h4>
                        </div>
                        <div className="flex gap-2 border border-gray-300 p-3 w-72">
                          <div className="h-7 w-7 bg-gray-400 rounded-full p-2">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <h4 className="text-lg font-normal">
                            Sole Proprietorship
                          </h4>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="flex gap-2 border border-gray-300 p-3 w-72">
                          <div className="h-7 w-7 bg-gray-400 rounded-full p-2">
                            <div className="h-full w-full bg-gray-800 rounded-full" />
                          </div>
                          <h4 className="text-lg font-normal">Unregistered</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:mt-5">
                      <div className="flex flex-col md:w-3/5">
                        <label className="text-lg font-normal">
                          Upload CAC Certificate
                        </label>
                        <p className="text-sm font-medium">
                          Upload CAC certificate{" "}
                        </p>
                        <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                          <img src={file} className="h-20 w-20" />
                          <div>
                            <input
                              type="file"
                              name="file"
                              multiple
                              className="sr-only"
                            />
                          </div>
                          <label className="text-base font-normal text-gray-700 mt-3">
                            Click to add document or drag
                            <br />
                            file here
                          </label>
                        </div>
                        <p className="text-sm text-center">
                          Your document must be no larger than 2Mb
                        </p>
                      </div>

                      <div className="flex flex-col md:w-3/5">
                        <label className="text-lg font-normal">
                          Upload Form CO 7
                        </label>
                        <p className="text-sm font-medium">
                          This shows the particulars of your directors
                        </p>
                        <div className="flex flex-col py-8 w-full bg-gray-100 items-center text-center my-3">
                          <img src={file} className="h-20 w-20" />
                          <div>
                            <input
                              type="file"
                              name="file"
                              multiple
                              className="sr-only"
                            />
                          </div>
                          <label className="text-base font-normal text-gray-700 mt-3">
                            Click to add document or drag
                            <br />
                            file here
                          </label>
                        </div>
                        <p className="text-sm text-center">
                          Your document must be no larger than 2Mb
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-10">
                    <h2 className="text-2xl font-semibold">Change Password</h2>
                    <div className="flex flex-col md:flex-row gap-5 mt-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-lg font-normal">
                          Old Password
                        </label>
                        <input
                          placeholder="Old Password"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-lg font-normal">
                          New Password
                        </label>
                        <input
                          placeholder="New Password"
                          className="border-2 border-gray-200 rounded py-3 pl-5 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-5 md:mt-10 justify-center lg:justify-start">
                    <button className="text-white text-lg border border-Dark-blue font-medium bg-Dark-blue px-14 py-2 rounded hover:bg-white hover:text-Dark-blue">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
                    



// {
//   /* <form class="flex items-center space-x-6"> */
// }
// {
//   /* <div class="shrink-0"> */
// }
// {
//   /* <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" /> */
// }
// {
//   /* </div> */
// }
// {
//   /* <label class="block"> */
// }
// {
//   /* <span class="sr-only">Choose profile photo</span> */
// }
// {
//   /* <input type="file" class="block w-full text-sm text-gray-500 */
// }
// //   file:mr-4 file:py-2 file:px-4
// //   file:rounded-full file:border-0
// //   file:text-sm file:font-semibold
// //   file:bg-violet-50 file:text-violet-700
// //   hover:file:bg-violet-100
// // "/>
// {
//   /* </label> */
// }
// {
//   /* </form> */
// }

export default SettingsGeneral;
