import React from 'react'

const Header = () => {
  return (
    <div className='px-20 py-5'>
          <div className='flex items-center gap-20'>
              <h1>Profile Overview</h1>
              <input
                  type="text"
                  name=""
                  id=""
                  className='w-60 bg-white outline-none rounded-full py-1 px-3 placeholder:text-sm'
                  placeholder='search anything here...'
              />
          </div>   
    </div>
  )
}

export default Header