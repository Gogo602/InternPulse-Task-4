import React from 'react'

const Action = () => {
  return (
    <div className='py-6 px-8 space-y-8 font-semibold bg-white rounded-md w-[105%] md:w-[100%]'>
          <div className='flex items-center justify-between'>
              <h3 className='font-bold text-xl'>Action</h3>
              <div
                className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-gray-50 text-sm font-bold cursor-help"
                title="Profile actions over time" 
                >
                ?
            </div>
          </div>
          <div className='flex items-center justify-between'>
              <h3>Profile visits</h3>
              <p>250</p>
          </div>
          <div className='flex items-center justify-between'>
              <h3>Website clicks</h3>
              <p>115</p>
          </div>
          <div className='flex items-center justify-between'>
              <h3>Calls</h3>
              <p>67</p>
          </div>
          <div className='flex items-center justify-between'>
              <h3>Getvdirection</h3>
              <p>164</p>
          </div>
          <div className='flex items-center justify-between'>
              <h3>Emails</h3>
              <p>170</p>
          </div>
          
    </div>
  )
}

export default Action