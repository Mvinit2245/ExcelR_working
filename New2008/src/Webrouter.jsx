import React from 'react'
import Home from './Home.jsx'
import { Route,Routes } from 'react-router-dom'
import Create from './Create.jsx'
function Webrouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
        </Routes>
    </div>
  )
}

export default Webrouter
