import React, { useEffect, useState } from 'react'
import ChatUsers from '../ChatUsers'
import Chats from '../Chats'
import { users } from '../Users'

const Chat = () => {
   const [searchInput, setSearchInput] = useState('');
   const [searchedResult, setSearchResult] = useState([]);
    const [selectedUserPair, setSelectedUserPair] = useState([1, 2]);
   
 const handleSearch = () => {
  const idToSearch = Number(searchInput); 
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    user.id === idToSearch
  );
  setSearchResult(filteredUsers);
};

useEffect(() => {
  const idToSearch = Number(searchInput);
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    user.id === idToSearch
  );
  setSearchResult(searchInput ? filteredUsers : []);
}, [searchInput]);

const handleUserSelect = (id) => {
    setSelectedUserPair([1, id]); 
  };


 
  return (
    <div className='flex gap-6 md:flex-row flex-col pb-20 ml-62'>
        <div className='md:w-[30%] flex flex-col gap-4'>
            <div>
                <input type="text" 
                className='bg-white w-full px-3 py-3 rounded-lg'
                placeholder='Search'
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                
                />

                
            </div>
          {
            searchedResult.length>0?
            (
                <div className="w-full rounded-[8px] bg-white px-4 py-4 flex flex-col gap-5 text-[#89868D]">
    {searchedResult.map((user, index) => (
      <ChatUsers
        key={index}
        name={user.name}
        jobTitle={user.jobTitle}
        time={user.time}
        desc={user.decs}
        avatar={user.avatar}
      />
    ))}
  </div>
            ):
            
            (
                <div className='w-full rounded-[8px] bg-white px-4 py-4 flex flex-col gap-5 text-[#89868D]'>
        {
            users.map((user,index)=>(
                <div
                key={index}
                >
                    <ChatUsers
                        name={user.name}
                        jobTitle={user.jobTitle}
                        time ={user.time}
                        desc={user.decs}
                        avatar={user.avatar}
                    />
                </div>
            ))
        }
     </div> 
            )
          }
            
          
            

        </div>
    

     <div className='md:w-[70%] mt-16 py-4 rounded-lg  bg-white'>
            <Chats />
            
     </div>
    </div>
  )
}

export default Chat
