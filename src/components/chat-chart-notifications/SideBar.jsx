import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <ul>
       <Link to='/chart'><li>Chart</li></Link> 
        <Link to='/notification'><li>Notification</li></Link>
        <Link to='/chat'><li>Chat</li></Link>
      </ul>
    </div>
  )
}

export default SideBar
