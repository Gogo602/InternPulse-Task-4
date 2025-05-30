import React, { useState } from 'react';
import { FaUserGroup } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { assets } from '../../../assets/asset';
import { hashTag } from '../../../assets/asset';



const MyProfile = () => {
     const [expandedIndex, setExpandedIndex] = useState(null);
    
     const toggleAccordion = (index) => {
       setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
     };

   
    
  return (
    <div className=' bg-white h-[100%] p-5 rounded-xl w-[120%] md:w-[109%] lg:w-full'>
          <div className='space-y-15'>
              <div className='flex items-center justify-between text-gray-500'>
                  <h1>My profile</h1>
                  <div className='flex items-center space-x-1'>
                      <FaUserGroup />
                      <IoSettings />
                  </div>
              </div>
              <div className='text-center space-y-3'>
                  <img src={assets.Ellipse} alt="" className='w-30 mx-auto' />
                  <p className='font-bold'>Alice_turner</p>
              </div>
              <div className='mt-8 space-y-1'>
                  <h1 className='text-xl font-semibold'>VIP Training Course</h1>
                  <div className='flex items-center space-x-2'>
                      <p className='text-purple-700 font-semibold'>10%</p> 
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-purple-700 h-2.5 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
              </div>
              <div className='flex items-center justify-between'>
                  <h1 className='text-xl'>Hashtags sets</h1>
                  <IoSettings className='bg-purple-200 p-2 text-purple-700 rounded-md w-8 h-8'/>
              </div>
              <div>
                {hashTag.map((tag, index) => (
                    <div key={index}>
                        <div className='flex items-center justify-between mt-10 mb-5'>
                            <p className='text-lg font-semibold'>{tag.name}</p>
                            <div onClick={() => toggleAccordion(index)}>
                                {expandedIndex === index ? <IoIosArrowDown className='w-5'/> : <IoIosArrowUp className='w-5'/>}
                            </div>
                        </div>
                        {expandedIndex === index && (
                            <div className='flex items-center space-x-2 px-1 text-gray-700 text-sm font-semibold'>
                                <p>{tag.hashtag.i}</p>
                                <p>{tag.hashtag.j}</p>
                                <p>{tag.hashtag.k}</p>
                            </div>
                    )}
                    </div>
                  ))} 
              </div>
          </div>
    </div>
  )
}

export default MyProfile;
