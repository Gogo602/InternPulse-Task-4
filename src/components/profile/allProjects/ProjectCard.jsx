import React from 'react'
import { projectCardDetails } from '../../../assets/asset'
import { BsThreeDotsVertical } from "react-icons/bs";


const ProjectCard = () => {
  return (
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projectCardDetails.map((items) => (
              <div
                  key={items.id}
                  className='border border-gray-200 p-5 space-y-7'>
              <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-5'>
                          {/* <p className='bg-red-200 px-4 py-2 text-red-700 font-bold rounded-sm'>{items.logo}</p> */}
                          <img src={items.logo} alt="" className='w-10'/>
                      <div>
                        <h2 className='font-bold'>{items.name}</h2>
                        <div className='flex items-center'>
                            <img src={items.mentor.i} alt="" className='w-5'/>
                            <img src={items.mentor.j} alt="" className='w-5'/>
                            <img src={items.mentor.k} alt="" className='w-5'/>
                            <img src={items.mentor.l} alt="" className='w-5'/>
                            <img src={items.mentor.m} alt="" className='w-5'/>
                        </div>
                      </div>
                  </div>
                  <BsThreeDotsVertical />
              </div>
              <p className='font-bold text-sm text-gray-500'>
                  {items.description}
              </p>
              <hr className='text-gray-200'/>
              <div className='flex items-center justify-between'>
                  <div>
                      <div className='text-gray-900 font-bold'>{items.info.noOfParticipants}</div>
                      <div className='text-gray-500 text-sm'>{items.info.name}</div>
                  </div>
                  <div>
                      <div className='text-gray-900 font-bold'>{items.info.dueDate}</div>
                      <div className='text-gray-500 text-sm'>{items.info.date}</div>
                  </div>
              </div>
          </div>
        ))}
          <div className='border border-gray-200 p-5'>
              <div className='flex items-center justify-center h-[100%]'>
                    <h1 className='font-bold text-lg text-gray-500'>New Project</h1>
              </div>
        </div>
    </div>
  )
}

export default ProjectCard