
import { Routes ,Route} from 'react-router-dom'
import PublicRoute from './public'
import ProtectedRoute from './protected'
import { useSelector } from 'react-redux'

import StudentsAuth from '../../users/students/studentsAuth'
import StudentHome from '../../users/students/studentsHome'
import Profile from '../../users/students/profile'



const StudentRouter = () => {
    const user = useSelector((state)=>state.user.user)

  return (
    <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/auth" element={<StudentsAuth/>}/>
        </Route>

        <Route element={<ProtectedRoute/>}>
               <Route path="/home" element={<StudentHome user={user}/>}/>
        </Route>      
    </Routes>
  );
};

export default StudentRouter
