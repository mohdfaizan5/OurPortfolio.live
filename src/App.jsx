import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Design1 from './components/Design1'
import Design2 from './components/Design2'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/:username' element={<Design1/>}/>
        <Route path='/:username/d1' element={<Design1/>}/>
        <Route path='/:username/d2' element={<Design2/>}/>
      </Routes>
    </div>
  )
}

export default App