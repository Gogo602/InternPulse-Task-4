import React from 'react'

const Header = ({name}) => {
  return (
    <div className='px-5 py-5'>
          <div className='flex items-center space-x-5 md:space-x-60'>
              <h1>{name}</h1>
              <input
                  type="text"
                  name=""
                  id=""
                  className='w-50 bg-white outline-none rounded-full py-1 px-3 placeholder:text-sm md:w-60'
                  placeholder='search anything here...'
              />
          </div>   
    </div>
  )
}

export default Header