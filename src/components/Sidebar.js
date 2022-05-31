import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Homes, Commercials, Plans, Analyses } from '../sources'

const Sidebar = () => {

  const activeLink = "bg-blue-700 px-1 text-gray-50 block my-3 capitalize";
  const normalLink = "bg-transparent px-1 text-gray-400 block my-3 capitalize";

  return (
    <div className='pr-20 pl-5 bg-gray-50 h-screen overflowY-scroll'>
      <p className='mb-3 mt-5 px-1'> Home </p>
      {Homes.map(home =>
        <NavLink to={home.to} className={({isActive}) => isActive ? activeLink : normalLink}> {home.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-1'> Commercials </p>
      {Commercials.map(commercial =>
        <NavLink to={commercial.to} className={({isActive}) => isActive ? activeLink : normalLink}> {commercial.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-1'> Plans </p>
      {Plans.map(plan =>
        <NavLink to={plan.to} className={({isActive}) => isActive ? activeLink : normalLink}> {plan.name} </NavLink>
      )}
      <p className='mb-3 mt-5 px-1'> Analyses </p>
      {Analyses.map(analysis =>
        <NavLink to={analysis.to} className={({isActive}) => isActive ? activeLink : normalLink}> {analysis.name} </NavLink>
      )}
    </div>
  )
}

export default Sidebar