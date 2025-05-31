import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { SiSpringsecurity } from "react-icons/si";
import { MdBrightnessMedium } from "react-icons/md";


const TimeLine = () => {

const [usecolor,setuscolor] =useState(true)

const handleColorChange = () => {
    setuscolor(!usecolor) 
}

    return (

        <div className= ' bg-[#EFEEEE] p-4 lg:py-4 lg:px-8 md:px-6 md:py-6'>
            {/* ==============================Header Section================================ */}
            <div className='md:flex md:gap-10 lg:gap-40 items-center p-2'>
                <h2 className='text-purple-700 text-xl md:text-xl lg:text-3xl font-bold pb-2 md:pb-0'>Project/New project</h2>
                <label htmlFor='search' className='flex justify-between items-center bg-white p-2 mb-4 md:mb-0 md:p-3 cursor-pointer rounded-full shadow-md md:w-[300px]'>
                    <input id="search" type="text" placeholder='search anything here...' className='bg-white' />
                    <p className=''><CiSearch /></p>
                </label>
                    <MdBrightnessMedium onClick={handleColorChange} className='cursor-pointer text-xl text-purple-700'/>
            </div>
            {
                usecolor ? 
             
                <div className='md:mt-6 bg-white  p-6 md:p-8 rounded shadow-md'>
                <h1 className='font-bold pb-4 md:pb-8 text-md md:text-2xl'>Timeline with dotted lines</h1>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>$8900, Design changes</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-purple-700'>Design</button>
                    <FaBell className='absolute top-0 text-purple-700 text-2xl  -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>$8900, Design changes</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#2dccff]'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#2dccff]'>#1832</button>
                    </div>
                    <IoIosPhonePortrait className='absolute top-0 text-2xl text-[#2dccff] -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>Server payment for April</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-purple-700'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-purple-700'>#1832</button>
                    </div>
                    <BsPaypal className='absolute top-0 text-2xl bg-white -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>New card added for order #4395133</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#deccfe]'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#deccfe]'>#1832</button>
                    </div>
                    <GrNotes className='absolute top-0 text-2xl text-[#deccfe] bg-white -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>Unlock packages for development</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-red-700'>Design</button>
                    <SiSpringsecurity className='absolute top-0 text-red-600 text-2xl bg-white  -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-gray-950'>New message unread</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-purple-600'>Design</button>
                    <SiSpringsecurity className='absolute top-0 text-purple-600 text-2xl bg-white  -left-3 font-bold ' />
                </div>


            </div>
            :
            
            <div className='md:mt-6 bg-black text-white p-6 md:p-8 rounded shadow-md'>
                <h1 className='font-bold pb-4 md:pb-8 text-md md:text-2xl'>Timeline with dotted lines</h1>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>$8900, Design changes</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-purple-700'>Design</button>
                    <FaBell className='absolute top-0 text-purple-700 text-2xl  -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>$8900, Design changes</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#2dccff]'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#2dccff]'>#1832</button>
                    </div>
                    <IoIosPhonePortrait className='absolute top-0 text-2xl bg-white -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>Server payment for April</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-purple-700'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-purple-700'>#1832</button>
                    </div>
                    <BsPaypal className='absolute top-0 text-2xl bg-white -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>New card added for order #4395133</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <div className='flex gap-4 items-center mt-2'>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#deccfe]'>ORDER</button>
                        <button className='p-1 rounded font-light w-14 text-white text-sm bg-[#deccfe]'>#1832</button>
                    </div>
                    <GrNotes className='absolute top-0 text-2xl text-[#deccfe] bg-white -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>Unlock packages for development</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-red-700'>Design</button>
                    <SiSpringsecurity className='absolute top-0 text-red-600 text-2xl bg-white  -left-3 font-bold ' />
                </div>

                <div className=' relative leading-tight px-6 md:px-10 mb-8 border-l-1 border-l-gray-400'>
                    <p className='font-medium text-md md:text-lg text-white'>New message unread</p>
                    <p className='text-sm pb-2 text-gray-500'>12 Dec 9:00 PM</p>
                    <p className='text-sm w-[190px] md:w-[250px] text-gray-500 pb-1.5'>People care about how you see the word, how you think. what motivates you, what you are struggling with or afraid of.</p>
                    <button className='p-1 mt-2 rounded font-light w-14 text-white text-sm bg-purple-600'>Design</button>
                    <SiSpringsecurity className='absolute top-0 text-purple-600 text-2xl bg-white  -left-3 font-bold ' />
                </div>


            </div>
            }


        </div>


    )
}

export default TimeLine