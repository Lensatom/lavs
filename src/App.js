import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Nav, Sidebar } from './components';
import { About, Home } from './pages';

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

  return (
    <BrowserRouter>
      <div className='w-full mt-0 flex lg:flex-row-reverse justify-between h-screen'>
        <div className={deviceWidth <= 820 && sideBar == true ? 'w-full lg:flex-col h-screen lg:justify-between blur-sm' : 'w-full h-screen lg:flex-col lg:justify-between'}>
          <Nav className='fixed w-full' style={{height: '10%'}} deviceWidth={deviceWidth} sideBar={sideBar} toggleNav={toggleNav}/>
          <div className='overflow-y-scroll' style={{height: '92%'}} onClick={deviceWidth <= 820 ? () => toggleNav(true) : {}}>
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
        {sideBar == true ? <Sidebar toggleNav={toggleNav} deviceWidth={deviceWidth}/> : ""}
      </div>
    </BrowserRouter>
  )
};

export default App;