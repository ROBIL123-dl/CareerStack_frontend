
import react,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useDispatch ,useSelector} from "react-redux";
import {api} from "./services/baseApi"
import { fetchUser } from "./redux/authSlice";
import StudentRouter from "./routes/studentRouters/StudentRouter";
import ServerErrorPage from "./pages/serverError";
import LandingPage from './pages/landing';
import PublicRoute from "./routes/studentRouters/public";




function App() {
 const { user, loading } = useSelector((state) => state.user);

 const dispatch = useDispatch()
 useEffect(() => {
  api.get("/auth/csrf/");
  dispatch(fetchUser());
}, []);

console.log("user is created or not in store",user)
  return (
   <BrowserRouter>
     <Routes>
       <Route element={<PublicRoute/>}>
           <Route path="/" element={<LandingPage/>}/>
        </Route>
        <Route path ="/serverErrorPage"  element={<ServerErrorPage/>}/>
        <Route path="/student/*" element={<StudentRouter/>}/>
    
     </Routes>
   </BrowserRouter>
 

  )
}

export default App
