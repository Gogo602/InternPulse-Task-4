import React from 'react'
import Header from '../../Header'
import TeamManagement from './TeamManagement';
import InviteTeams from './InviteTeams';
import TeamMembers from './TeamMembers';


const Teams = () => {
  return (
    <div>
      <Header
        name='Profile/Teams'
      />
      <div className='bg-white rounded-md mx-3 px-5 py-10 ml-62'>
          <div className='space-y-5'>
            <TeamManagement />
            <hr className='text-gray-400'/>
            <InviteTeams />
            <hr className='text-gray-400'/>
            <TeamMembers />
          </div>
      </div>
    </div>
  )
}

export default Teams;