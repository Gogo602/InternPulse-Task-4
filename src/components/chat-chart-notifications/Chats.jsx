import React, { useState } from 'react';
import { users } from './Users';

const Chats = () => {
  const [messages, setMessages] = useState([
                                        { sender: 1,  text: 'Hey How Are you?' },
                                         {sender:2, text:"I am good"}
  ]);
  const [input, setInput] = useState('');
  const [selectedUser, setSelectedUser] = useState([1,2]);


  const handleSend = () => {
    if (!input.trim()) return;

  
    const newMessages = [...messages, 
        { sender: selectedUser[0], text: input }];
    setMessages(newMessages);
    setInput('');

    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: selectedUser[1], text: 'Thanks for your message!' }
      ]);
    }, 1000);
  };

  return (
    <div className="md:w-[600px] md:h-[600px] mx-auto mt-10  rounded shadow p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, idx) => {

            const sender = users.find(u => u.id ===msg.sender);
            const isCurrentUser = msg.sender === selectedUser[0];
          return(
         <div key={idx} className={`flex items-start gap-2 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && <img src={sender.avatar} alt={sender.name} className="w-8 h-8 rounded-full" />}
      <div
        className={`p-2 rounded-md text-[10px] max-w-[70%] text-[#89868D] ${
          isCurrentUser ? '  border border-[#6E39CB] ' : '  bg-[#F4F5F9]'
        }`}
      >
        {msg.text}
      </div>
      {isCurrentUser && <img src={sender.avatar} alt={sender.name} className="w-8 h-8 rounded-full" />}
    </div>
          );
})}
      </div>




      <div className="flex md:flex-row flex-col  gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className="w-full flex-1 shadow px-3 py-2 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-[#6E39CB] text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chats;
