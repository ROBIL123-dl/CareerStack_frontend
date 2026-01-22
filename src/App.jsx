
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import StudentRouter from "./routes/studentRouters/StudentRouter";
import ServerErrorPage from "./pages/serverError";

function App() {
 

  return (
   <BrowserRouter>
     <Routes>
       <Route path ="/serverErrorPage"  element={<ServerErrorPage/>}/>
        <Route path="/*" element={<StudentRouter/>}/>
     </Routes>
   </BrowserRouter>
 

  )
}

export default App
