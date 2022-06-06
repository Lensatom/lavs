import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'

const Nav = props => {

  const activeLink = "text-white";
  const normalLink = "text-gray-200";

  return (
    <div className="w-full bg-blue-700 text-white px-5 py-3 lg:px-10 top-0 flex justify-between" style={{alignItems: 'center'}}>
      {!props.sideBar ? <GiHamburgerMenu className='cursor-pointer text-xl' onClick={() => props.toggleNav()} /> : <div className='cursor-pointer text-xl' onClick={() => props.toggleNav()}> </div>}
      <div className='flex justify-end md:justify-between w-1/2 md:w-1/2 lg:w-1/4 '>
        {props.deviceWidth > 765 ?
        <>
          <NavLink to='/chat'  className={({isActive}) => isActive ? activeLink : normalLink}>
            Chat
          </NavLink>
          <NavLink to='/stock' className={({isActive}) => isActive ? activeLink : normalLink}>
            Stock
          </NavLink>
        </>
        : ""}
        <NavLink  to='/profile' className={({isActive}) => isActive ? activeLink : normalLink}>
          <span className='bg-blue-100 rounded-full'></span>
          <span> Hi, Mike </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav