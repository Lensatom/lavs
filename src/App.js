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
      <div className='w-full lg:flex lg:justify-between mt-0'>
        {sideBar == true ? <Sidebar toggleNav={toggleNav}/> : ""}
        <div className='w-full'>
          <Nav className='fixed' deviceWidth={deviceWidth} toggleNav={toggleNav}/>
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