import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const pageNames = {
        '/':"Home",
        "/chat":"Chat",
        "/chart":"Chart",
        "/notification":"Notification"
    };

    const location = useLocation();

    const title = pageNames[location.pathname] || "Home"
  return (
    <div>
      <div className='flex items-center  gap-44 px-8 py-6 '>
        <h1 className='font-bold text-[25px] text-[#6E39CB]'>
            {title } </h1>

        <input type="text" placeholder='Search anything..'
        className='bg-white px-4 py-2 w-[330px] rounded-[20px]'/>
      </div>
    </div>
  )
}

export default Header
