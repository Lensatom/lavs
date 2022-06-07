import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Nav, Sidebar } from './components';
import { About, Home, Profile } from './pages';
import { Themes } from './sources';

const App = () => {

  const [deviceWidth, setDeviceWidth] = useState()
  const [sideBar, setSideBar] = useState()

  const [mode, setMode] = useState(null)
  const [theme, setTheme] = useState(['', ''])

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

    if (localStorage.getItem('mode') == null) {
      localStorage.setItem('mode', 'light')
    }
    setMode(localStorage.getItem('mode'))
    
    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 0)
    }
    
    setTheme(Themes[localStorage.getItem('theme')]['color'])

  }, [mode, theme])

  const changeMode = () => {
    let localMode = localStorage.getItem('mode')
    localMode == 'dark' ? localStorage.setItem('mode', 'light') : localStorage.setItem('mode', 'dark')
    setMode(null)
  }

  const changeTheme = mode => {
    localStorage.setItem('theme', mode)
    setTheme(['', ''])
  }

  return (
    <BrowserRouter>
      <div className={`w-full mt-0 flex lg:flex-row-reverse justify-between h-screen ${mode == 'dark' ? 'bg-gray-900 text-white' : ''}`}>
        <div className={deviceWidth <= 820 && sideBar == true ? 'w-full lg:flex-col h-screen lg:justify-between blur-sm' : 'w-full h-screen lg:flex-col lg:justify-between'}>
          <Nav className='fixed w-full' style={{height: '10%'}} theme={theme} deviceWidth={deviceWidth} sideBar={sideBar} toggleNav={toggleNav}/>
          <div className='overflow-y-scroll'  style={{height: '92%'}} onClick={deviceWidth <= 820 ? () => toggleNav(true) : {}}>
            <Routes> 
              <Route path='/' element={<Home mode={mode}/>}/>
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile changeTheme={changeTheme} theme={theme} />} />
            </Routes>
          </div>
        </div>
        {sideBar == true ? <Sidebar theme={theme} changeMode={changeMode} mode={mode} toggleNav={toggleNav} deviceWidth={deviceWidth}/> : ""}
      </div>
    </BrowserRouter>
  )
};

export default App;