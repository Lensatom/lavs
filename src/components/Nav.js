import React from 'react'

const Nav = () => {
  return (
    <div className="w-full bg-white h-10 px-10 pt-3 top-0 flex align-bottom justify-between">
      <span> Menu </span>
      <div className='flex justify-between' style={{width: '20%'}}>
        <span> Chat </span>
        <span> Stock </span>
        <div>
          <span> Pic </span>
          <span> Name </span>
        </div>
      </div>
    </div>
  )
}

export default Nav