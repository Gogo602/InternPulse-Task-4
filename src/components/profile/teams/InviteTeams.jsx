import React from 'react'
import { FaAngleDown, FaEnvelope,  FaPlus } from 'react-icons/fa6';

const InviteTeams = () => {
  return (
    <div className='grid grid-cols-1 space-x-5 space-y-5 md:grid-cols-5'>
        <div className='col-span-2 space-y-5'>
            <h2 className='text-xl font-bold'>Invite team members</h2>
            <p className='text-sm text-gray-500'>
            Get your projects up and running faster by
            inviting your team to collaborate.
            </p>
        </div>
        <div className='md:col-span-3 w-full'>
            <ul className='space-y-7 mt-5'>
            <li className='flex items-center space-x-5'>
                <div className='flex items-center border border-gray-400 w-[80%]  px-2 rounded-md text-gray-500 md:w-[60%] md:px-5'>
                    <FaEnvelope />
                    <input 
                        type="text" 
                        value="team@gmail.com" 
                        className='w-[100%] px-2 py-1 outline-none md:px-4'
                        readOnly
                    />
                </div>
                <button className='flex items-center text-gray-500 border border-gray-400 px-5 py-1 rounded-md'>
                    Readonly
                    <FaAngleDown className='ml-3'/>
                </button>
            </li>
            <li className='flex items-center space-x-5'>
                <div className='flex items-center border border-gray-400  w-[80%]  px-2 rounded-md text-gray-500 md:w-[60%] md:px-5'>
                    <FaEnvelope />
                    <input 
                        type="text" 
                        value="team@gmail.com" 
                        className='w-[100%] px-2 py-1 outline-none md:px-4'
                        readOnly
                    />
                </div>
                <button className='flex items-center text-gray-500 border border-gray-400 px-5 py-1 rounded-md'>
                    Readonly
                    <FaAngleDown className='ml-3'/>
                </button>
            </li>
            <li className='flex items-center space-x-5'>
                <div className='flex items-center border border-gray-400  w-[80%]  px-2 rounded-md text-gray-500 md:w-[60%] md:px-5'>
                    <FaEnvelope />
                    <input 
                        type="text" 
                        value="team@gmail.com" 
                        className='w-[100%] px-2 py-1 outline-none md:px-4'
                        readOnly
                    />
                </div>
                <button className='flex items-center text-gray-500 border border-gray-400 px-5 py-1 rounded-md'>
                    Readonly
                    <FaAngleDown className='ml-3'/>
                </button>
            </li>
            <li className='flex items-center space-x-5'>
                <div className='flex items-center border border-gray-400  w-[80%]  px-2 rounded-md text-gray-500 md:w-[60%] md:px-5'>
                    <FaEnvelope />
                    <input 
                        type="text" 
                        value="team@gmail.com" 
                        className='w-[100%] px-2 py-1 outline-none md:px-4'
                        readOnly
                    />
                </div>
                <button className='flex items-center text-gray-500 border border-gray-400 px-5 py-1 rounded-md'>
                    Readonly
                    <FaAngleDown className='ml-3'/>
                </button>
            </li>
            <li className='flex items-center space-x-5'>
                <div className='flex items-center w-[55%] text-gray-500 md:w-[60%]'>
                    <FaPlus className='w-5 pr-2'/>
                    Add another
                </div>
                <button className='flex items-center text-purple-800 py-1 '>
                    <FaEnvelope className='mr-2'/>
                    Send invites
                </button>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default InviteTeams