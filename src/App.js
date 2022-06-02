import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Nav, Sidebar } from './components';
import { Home } from './pages';

const App = () => {

  const [deviceWidth, setDeviceWidth] = useState()
  const [sideBar, setSideBar] = useState()

  const toggleNav = state => {
    setSideBar(!sideBar)
    if (state == true) {
      setSideBar(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 820 ? setSideBar(true) : setSideBar(false)
      setDeviceWidth(window.innerWidth)
    }

    window.addEventListener('resize', () => handleResize())

    handleResize()
  }, [])

  let blur = {filter: 'blur(5px)'}

  return (
    <BrowserRouter>
      <div className='w-full mt-0 flex justify-between h-screen'>
        <div className={deviceWidth <= 820 && sideBar == true ? 'w-full lg:flex-col lg:justify-between blur-sm' : 'w-full lg:flex-col lg:justify-between'}>
          <Nav className='fixed w-full' deviceWidth={deviceWidth} toggleNav={toggleNav}/>
          <div onClick={deviceWidth <= 820 ? () => toggleNav(true) : {}}>
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/home' element='Hello' />
            </Routes>
          </div>
        </div>
        {sideBar == true ? <Sidebar toggleNav={toggleNav} deviceWidth={deviceWidth}/> : ""}
      </div>
    </BrowserRouter>
  )
};

export default App;