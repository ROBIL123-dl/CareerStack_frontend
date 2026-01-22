import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../../pages/home'
import StudentsAuth from '../../users/students/studentsAuth'
const Public = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/auth" element={<StudentsAuth/>}/>
      </Routes>
    
    </>
  )
}

export default Public
