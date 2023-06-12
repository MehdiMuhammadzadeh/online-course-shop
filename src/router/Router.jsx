import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/landingPage/Home'
import MainNavigation from '../shared/components/mainNavigation/MainNavigation'
import Dashboard from '../pages/dashboard/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
    <MainNavigation />
        <Routes>
          <Route path='/' element={<Home />}/>   
          <Route path='/dashboard' element={<Dashboard />}/>   
        </Routes>
    </BrowserRouter>
  )
}

export default Router