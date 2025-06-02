import React from 'react'
import Card from './Card'
import FollowersCard from './FollowersCard';
import Action from './Action';
import InteractionChart from './Interaction';
import BestTimeChart from './BestTime';
import Gender from './Gender';
import AgeRange from './AgeRange';
import MyProfile from './MyProfile';
import Header from '../../Header';
 


const ProfileOverview = () => {

  
  return (
    <>
      <Header
        name='Profile Overview'
      />
      <div className='grid grid-cols-1 gap-5 px-5 pb-5 lg:grid-cols-5 ml-60'>
        <div className='col-span-4 space-y-5'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
              <Card 
                chartColor='#6E39CB'
                name='Average Likes'
                averageLikes='635'
                percentageChange='+21.01%'
                isPositiveChange={true}
              />
              <Card 
                chartColor='#6E39CB'
                name='Comments recieved'
                averageLikes='123'
                percentageChange='+4.399%'
                isPositiveChange={true}
              />
              <Card 
                chartColor='#6E39CB'
                name='Av. Engagement rate'
                averageLikes='23%'
                percentageChange='-7.9%'
                isPositiveChange={false}
              />
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
              <div className='col-span-2 bg-white p-5 rounded-md shadow-md'>
               <FollowersCard />
              </div>
              <div className='col-span-1'>
                <Action />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <div className='col-span-1 bg-white p-5 rounded-xl'>
                <InteractionChart />
              </div>
              <div className='col-span-1 bg-white p-5 rounded-xl'>
                <BestTimeChart />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-5'>
              <div className='col-span-2 '>
                <Gender />
              </div>
              <div className='col-span-3 bg-white p-5 rounded-xl'>
                <AgeRange />
              </div>
            </div>
        </div>
        <div className='md:col-span-1'>
            <MyProfile />
        </div>
    </div>
  </>
  )
}

export default ProfileOverview;