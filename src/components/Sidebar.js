import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Homes, Commercials, Plans, Analyses } from '../sources'

const Sidebar = props => {

  const activeLink = "bg-blue-700 px-2 py-1 text-gray-50 block my-3 capitalize w-full md:w-1/2 lg:w-full";
  const normalLink = "bg-transparent rounded-5 px-2 py-1 text-gray-400 block my-3 capitalize hover:bg-gray-100 hover:rounded-sm w-full md:w-1/2 lg:w-full";

  return (
    <div className='pr-20 pl-5 bg-gray-50 h-screen w-auto'>
      <p className='mb-3 mt-5 px-2'> Home </p>
      {Homes.map(home =>
        <NavLink to={home.to} onClick={() => props.deviceWidth < 765 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}> {home.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-2'> Commercials </p>
      {Commercials.map(commercial =>
        <NavLink to={commercial.to} onClick={() => props.deviceWidth < 765 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}> {commercial.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-2'> Plans </p>
      {Plans.map(plan =>
        <NavLink to={plan.to} onClick={() => props.deviceWidth < 765 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}> {plan.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-2'> Analyses </p>
      {Analyses.map(analysis =>
        <NavLink to={analysis.to} onClick={() => props.deviceWidth < 765 ? props.toggleNav() : {}} className={({isActive}) => isActive ? activeLink : normalLink}> {analysis.name} </NavLink>
      )}
    </div>
  )
}

export default Sidebar