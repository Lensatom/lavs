import React from 'react'
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
import {RiAttachment2} from 'react-icons/ri'

const ChatEnvironment = props => {
  return (
    <div className='w-full flex flex-col justify-between'>
      <div className='px-3 py-1 w-full text-white flex justify-between items-center'>
        <div className='flex w-1/2 items-center overflow-hidden'>
          <div className='w-10 h-10 rounded-full bg-gray-400'></div>
          <div className='ml-2'>
            <p className='capitalize text-lg'> James Ayoola </p>
            <p className='text-gray-200 text-xs lg:text-sm'> {props.customer} </p>
          </div>
        </div>
        <div className='flex w-2/5 justify-between overflow-hidden'>
          <BiPhoneCall className='text-lg'/>
          <AiOutlineMail className='text-lg' />
          <AiOutlineWhatsApp className='text-lg' />
        </div>
      </div>
      <div className='px-1 lg:px-3 py-3 w-full flex justify-evenly items-center'>
        <div className='w-10 h-10 flex justify-center items-center rounded-full bg-blue-500'> 
          <RiAttachment2 className='text-2xl'/>
        </div>
        <input className='p-1 mx-1 w-3/4 rounded-md placeholder:text-gray-700 placeholder:text-sm text-md text-black' placeholder='Write message here' />
        <div className='w-10 h-10 flex justify-center items-center rounded-full bg-green-500'> 
          <FiSend className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default ChatEnvironment