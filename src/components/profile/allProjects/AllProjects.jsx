import React from 'react'
import Header from '../../Header';
import { assets } from '../../../assets/asset';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const AllProjects = () => {
  return (
    <div className='px-1 pb-5 md:px-5'>
          <Header
            name='All Projects'
          />
          <div className='border border-gray-200 bg-white rounded-md md:ml-60'>
              <div className='px-8 py-10 flex flex-wrap space-y-5 items-center justify-between'>
                  <div className='flex items-center space-x-5 font-bold'>
                      <img src={assets.Frame2} alt="Sayo Kravits" className='w-8'/>
                      <div>
                        <h1 className=''>Sayo Kravits</h1>
                        <p className='text-gray-500 text-sm'>Public Relations</p>
                      </div>
                  </div>
                  <div className='flex items-center space-x-5 font-bold'>
                      <Link className='bg-purple-800 text-white px-5 py-1 rounded-md md:px-8'>App</Link>
                      <Link className='border border-purple-800 text-purple-800 px-5 py-1 rounded-md md:px-8'>Messages</Link>
                      <Link className='border border-purple-800 text-purple-800 px-5 py-1 rounded-md md:px-8'>Settings</Link>
                  </div>
              </div>
              <div className=' px-3 py-5 md:px-5'>
                  <div className='bg-gray-200 border border-gray-200 rounded-md'>
                        <div className='p-5'>
                            <h1 className='font-bold text-lg'>Some of Our Awesome projects</h1>
                        </div>
                        <div className='bg-white pt-7 pb-10 px-5'>
                            <ProjectCard />
                        </div>
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default AllProjects;