import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChatCustomers } from '../fetched'

const ChatSidebar = props => {

  const activeLink = `bg-gray-700 px-2 py-1 text-gray-50 block my-3 capitalize w-full flex items-center justify-between rounded-md`;
  const normalLink = "bg-gray-200 rounded-5 px-2 py-1 text-black block my-3 capitalize hover:bg-gray-100 w-full  flex items-center justify-between rounded-md";

  return (
    <div className='h-88 w-full lg:w-1/4 lg:border-r-1 lg:border-solid lg:border-gray-400 p-5 overflow-y-scroll sticky' style={{height: '100%'}}>
      {ChatCustomers.map(chatcustomer => 
        <NavLink to={`/chat/${chatcustomer.Email}`} onClick={() => props.update()} className={({isActive}) => isActive ? activeLink : normalLink}>
          <p> {chatcustomer.Name} </p>
        </NavLink>
      )}
    </div>
  )
}

export default ChatSidebar