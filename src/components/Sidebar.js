import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
import {BsFillSunFill} from 'react-icons/bs'

import { Homes, Commercials, Plans, Analyses } from '../sources'

const Sidebar = props => {

  const activeLink = "bg-blue-700 px-2 py-1 text-gray-50 block my-3 capitalize w-full md:w-1/2 lg:w-full flex items-center justify-between rounded-md";
  const normalLink = "bg-transparent rounded-5 px-2 py-1 text-gray-400 block my-3 capitalize hover:bg-gray-100 hover:rounded-sm w-full md:w-1/2 lg:w-full flex items-center justify-between rounded-md";

  let light = <BsFillSunFill />
  let dark = <MdDarkMode />
  const mode = props.mode == 'dark' ? [<BsFillSunFill onClick={(() => props.changeMode())} />, 'dark'] : [<MdDarkMode onClick={(() => props.changeMode())} />, 'light']

  return (
    <div className={`lg:static fixed ${mode[1] == 'dark' ? 'bg-black text-white' : 'bg-gray-50'} h-screen w-3/4 md:w-1/2 lg:w-2/12`} style={{overflowY: 'scroll'}}>
      <div className='flex py-3 justify-evenly' style={{alignItems: 'center'}}>
        <div className='flex-col w-3/4'  onClick={() => props.deviceWidth <= 820 ? props.toggleNav() : {}}>
          <h2 className='text-2xl static  text-blue-700'> Lavs Admin </h2>
          <NavLink to='/profile' className='text-sm text-gray-400 cursor-pointer'> James Michael </NavLink>
          <div className='cursor-pointer mt-5'> {mode[0]} </div>
        </div>
        <AiFillCloseCircle className='text-lg cursor-pointer text-gray-400' onClick={() => props.toggleNav()} />
      </div>
      <div className='w-full px-2'>
        <p className='mb-3 mt-5 px-2'> Home </p>
        {Homes.map(home =>
          <NavLink to={home.to} onClick={() => props.deviceWidth <= 820 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}>
            {home.icons[0]}
            <p> {home.name} </p>
          </NavLink>
        )}
        <p className='mb-3 mt-5 px-2'> Commercials </p>
        {Commercials.map(commercial =>
          <NavLink to={commercial.to} onClick={() => props.deviceWidth <= 820 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}>
            {commercial.icons[0]}
            <p> {commercial.name} </p>
          </NavLink>
        )}
        <p className='mb-3 mt-5 px-2'> Plans </p>
        {Plans.map(plan =>
          <NavLink to={plan.to} onClick={() => props.deviceWidth <= 820 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}>
            {plan.icons[0]}
            <p> {plan.name} </p>
          </NavLink>
        )}
        <p className='mb-3 mt-5 px-2'> Analyses </p>
        {Analyses.map(analysis =>
        <NavLink to={analysis.to} onClick={() => props.deviceWidth <= 820 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}> {analysis.name} </NavLink>
        )}
      </div>
    </div>
  )
}

export default Sidebar