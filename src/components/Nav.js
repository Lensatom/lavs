import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
  return (
    <div className="w-full bg-blue-700 text-white h-10 h-12 px-5 lg:px-10 pt-3 top-0 flex align-bottom justify-between">
      <span className='cursor-pointer' onClick={() => props.toggleNav()}> Menu </span>
      <div className='flex justify-end md:justify-between w-1/2 md:w-1/2 lg:w-1/4'>
        {props.deviceWidth > 765 ?
        <>
          <NavLink to={'/chat'} className=''> Chat </NavLink>
          <NavLink to={'/stock'} className=''> Stock </NavLink>
        </>
        : ""}
        <div className='w-50 hover:bg-gray-50 px-5'>
          <span className='bg-blue-100 rounded-full'></span>
          <span> Hi, Mike </span>
        </div>
      </div>
    </div>
  )
}

export default Nav