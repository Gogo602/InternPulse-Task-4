import React from 'react'
import { assets } from '../../../assets/asset'
import { TiTick } from "react-icons/ti";


const TeamMembers = () => {
  return (
    <div className='grid grid-cols-1 space-x-5 space-y-5 md:grid-cols-5'>
        <div className='col-span-2 space-y-5'>
            <h2 className='text-xl font-bold'>Team members</h2>
            <p className='text-sm text-gray-500'>
            Get your projects up and running faster by
            inviting your team to collaborate.
            </p>
        </div>
        <div className='col-span-3'>
            <ul className='space-y-7 mt-5'>
            <li className='flex items-center space-x-4'>
                <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                <h4>Name</h4>
            </li>
            <hr className='text-gray-400'/>
            <li className='flex items-center space-x-8 md:space-x-5'>
                <div className='flex items-center w-[60%] text-gray-500 space-x-4'>
                    <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                    <div className='flex items-center space-x-3'>
                    <img src={assets.Ellipse} alt="Olivia Rhyne" className='w-10'/>
                    <div className='text-sm'>
                        <h4 className='text-gray-900'>Oliva Rhye</h4>
                        <p>olivia@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center text-gray-500 space-x-3 md:space-x-8'>
                    <button>Admin</button>  
                    <button>Delete</button>  
                </div>
            </li>
            <hr className='text-gray-400'/>
            <li className='flex items-center space-x-8 md:space-x-5'>
                <div className='flex items-center w-[60%] text-gray-500 space-x-4'>
                    <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                    <div className='flex items-center space-x-3'>
                    <img src={assets.Ellipse} alt="Olivia Rhyne" className='w-10'/>
                    <div className='text-sm'>
                        <h4 className='text-gray-900'>Oliva Rhye</h4>
                        <p>olivia@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center text-gray-500 space-x-3 md:space-x-8'>
                    <button>Admin</button>  
                    <button>Delete</button>  
                </div>
            </li>
            <hr className='text-gray-400'/>
            <li className='flex items-center space-x-8 md:space-x-5'>
                <div className='flex items-center w-[60%] text-gray-500 space-x-4'>
                    <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                    <div className='flex items-center space-x-3'>
                    <img src={assets.Ellipse} alt="Olivia Rhyne" className='w-10'/>
                    <div className='text-sm'>
                        <h4 className='text-gray-900'>Oliva Rhye</h4>
                        <p>olivia@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center text-gray-500 space-x-3 md:space-x-8'>
                    <button>Admin</button>  
                    <button>Delete</button>  
                </div>
            </li>
            <hr className='text-gray-400'/>
            <li className='flex items-center space-x-8 md:space-x-5'>
                <div className='flex items-center w-[60%] text-gray-500 space-x-4'>
                    <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                    <div className='flex items-center space-x-3'>
                    <img src={assets.Ellipse} alt="Olivia Rhyne" className='w-10'/>
                    <div className='text-sm'>
                        <h4 className='text-gray-900'>Oliva Rhye</h4>
                        <p>olivia@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center text-gray-500 space-x-3 md:space-x-8'>
                    <button>Admin</button>  
                    <button>Delete</button>  
                </div>
            </li>
            <hr className='text-gray-400'/>
            <li className='flex items-center space-x-8 md:space-x-5'>
                <div className='flex items-center w-[60%] text-gray-500 space-x-4'>
                    <TiTick className='bg-gray-500 text-white w-8 h-5 rounded-sm'/>
                    <div className='flex items-center space-x-3'>
                    <img src={assets.Ellipse} alt="Olivia Rhyne" className='w-10'/>
                    <div className='text-sm'>
                        <h4 className='text-gray-900'>Oliva Rhye</h4>
                        <p>olivia@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center text-gray-500 space-x-5 md:space-x-8'>
                    <button>Admin</button>  
                    <button>Delete</button>  
                </div>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default TeamMembers