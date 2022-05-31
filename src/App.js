import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Nav, Sidebar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='fixed w-full flex justify-between'>
        <Sidebar />
        <div className='w-full'>
          <Nav className='fixed'/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element='Hello' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;