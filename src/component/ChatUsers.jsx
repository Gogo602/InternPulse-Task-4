import React from 'react'

const ChatUsers = ({name, jobTitle, time, desc,avatar}) => {
  return (
    <div>
        {/* time and user */}
      <div className='flex p-2 justify-between'>
       {/* user */}
       <div className='flex flex-col gap-2'>
        {/* avatar, name and job title */}
        <div className='flex gap-2 items-center'>

            {/* avatar */}
            <div className='w-14 h-14 flex items-center justify-center  rounded-full overflow-hidden'>
  <img 
    className='w-full h-full object-cover'
    src={avatar} 
    alt={`${name} image`} 
  />
</div>
               <div>
                     {/* name and title */}
            <h1 className='text-[14px]'>{name}</h1>
            <h1 className='text-[10px]'>{jobTitle}</h1>
                </div>
           
           
        </div>

        <p className='text-[10px] lato'>{desc}</p>
       </div>

       {/* timer */}
       <p className='text-[10px]'>{time}</p>
    </div>
    </div>
  )
}

export default ChatUsers
