import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";

const NewProject = () => {
  return (
    <div className='bg-[#EFEEEE] p-4 lg:p-8 md:p-6'>
      <div className='md:flex md:gap-44 items-center p-2'>
        <h2 className='text-purple-700 md:text-xl lg:text-3xl font-bold pb-2 md:pb-0'>Project/New project</h2>
        <label htmlFor='search' className='flex justify-between items-center bg-white p-2 mb-4 md:mb-0 md:p-2.5 cursor-pointer rounded-full shadow-md md:w-[300px]'>
          <input id="search" type="text" placeholder='search anything here...' className='bg-white' />
          <p className=''><CiSearch /></p>
        </label>
      </div>

      <div className='lg:mx-40 md:mt-16 bg-white p-8 rounded shadow-md'>
        <div>
          <h4 className='text-xl font-medium text-gray-950'>New Project</h4>
          <p className='text-gray-600 text-sm'>Create new project</p>
        </div>
        <form>
          <div className='md:flex md:justify-between md:gap-6 lg:gap-10 mt-4 pb-4'>
            <div className='mt-4 md:grid md:gap-3.5 md:w-full'>
              <label className='text-gray-900 text-md'>Project Name</label>
              <input className='bg-[#EFEEEE] p-2 md:py-3 rounded' type="text" required />
            </div>
            <div className='mt-4 md:grid md:gap-3.5 md:w-full'>
              <label className='text-gray-900 text-md'>Project Tittle</label>
              <input className='bg-[#EFEEEE] p-2 md:py-3 rounded' type="text" required />
            </div>
          </div>

          <div className='mt-4 md:grid gap-3.5'>
            <label className='text-gray-900 text-md'>Project Tags</label>
            <input className='bg-[#EFEEEE] p-2 md:p-3 rounded placeholder-purple-700 lg:w-[430px] md:w-[350px] md:placeholder:font-medium placeholder:  ' placeholder='Choice 1' type="text" required />
          </div>


          <div className='md:flex justify-between md:gap-6 lg:gap-10 mt-10 pb-4'>
            <div className='grid gap-3.5 w-full'>
              <label className='text-gray-900 text-md' >Start Date</label>
              <input className='bg-[#EFEEEE] p-2 md:p-3 rounded text-[#EFEEEE]' id="date" name="date" type="date" required />
            </div>
            <div className='grid gap-3.5 w-full'>
              <label className='text-gray-900 text-md' >End Date</label>
              <input className='bg-[#EFEEEE] p-2 md:p-3 rounded text-[#EFEEEE] hover:text-black hove:bg-[#EFEEEE]' id="date" name="date" type="date" required />
            </div>
          </div>

          <div className='bg-[#EFEEEE] p-8 rounded mt-4'> 
          <p className='text-gray-900 text-md pb-8'>Starting File</p>
          <label htmlFor="image" className='text-md cursor-pointer'>
          <div className='grid justify-center text-center p-6 border-purple-700 border-dashed border-2 rounded'>
            <p  className='text-purple-700 text-xl grid justify-center pb-6'><FaCloudDownloadAlt/></p>
            <p className='text-md'> <span className='text-purple-700 '>Click to upload</span> or drag and drop</p>
            <p className='text-gray-500 text-sm'>SVG, PNG,JPG OR GIF</p>
            <p className='text-gray-500 text-sm'>max, 800x400px</p>
            <input id="image" name="image" type="file" accept="image/*" className='hidden' required />
          </div>
          </label>
         </div>

          {/* <div className='grid justify-center text-center p-4 border-purple-700 border-dashed border-2 rounded'>
            <p className='text-purple-700 text-xl grid justify-center'><FaCloudDownloadAlt /></p>
            <label htmlFor="image" className='text-md cursor-pointer'>
              <span className='text-purple-700'>click to upload</span> or drag and drop
            </label>
            <p className='text-gray-500 text-sm'>SVG, PNG, JPG OR GIF</p>
            <p className='text-gray-500 text-sm'>max, 800x400px</p>
            <input id="image" name="image" type="file" accept="image/*" required className="hidden" />
          </div> */}

          <div className='flex justify-center md:justify-end mt-8 gap-2 md:gap-4'>
            <button className='py-1 md:py-2 border-purple-700 border md:text-xl font-light rounded md:w-44 text-center md:px-4 px-2 text-purple-700'>Cancel</button>
            <button className='py-1 md:py-2 border-purple-700 border md:text-xl font-light text-center rounded md:w-44  bg-purple-700 px-2 text-white md:px-4'>Create Project</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default NewProject