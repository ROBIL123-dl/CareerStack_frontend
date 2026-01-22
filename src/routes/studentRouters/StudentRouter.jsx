import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Public from './public'
const StudentRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Public/>}/>
    </Routes>
  );
};
export default StudentRouter
