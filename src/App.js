import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Nav, Sidebar } from './components';
import { Home } from './pages';

const App = () => {

  const [deviceWidth, setDeviceWidth] = useState()
  const [sideBar, setSideBar] = useState()

  const toggleNav = () => {
    setSideBar(!sideBar)
  }

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 820 ? setSideBar(true) : setSideBar(false)
      setDeviceWidth(window.innerWidth)
    }

    window.addEventListener('resize', () => handleResize())

    handleResize()
  }, [])

  return (
    <BrowserRouter>
      <div className='w-full  mt-0'>
        <Nav className='fixed w-full' deviceWidth={deviceWidth} toggleNav={toggleNav}/>
        <div className='w-full lg:flex lg:justify-between'>
          {sideBar == true ? <Sidebar toggleNav={toggleNav} deviceWidth={deviceWidth}/> : ""}
          <Routes style={deviceWidth <= 820 && sideBar == true ? {filter: 'blur(50px)'} : ""}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element='Hello' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;