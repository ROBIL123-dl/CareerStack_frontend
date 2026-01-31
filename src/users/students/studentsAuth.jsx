import React,{useState}from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {setUser} from '../../redux/authSlice'
import AuthForm from '../../pages/auth'
import Spinner from '../../components/common/spinner'
import {checkEmail,verfiyOtp,register,signIn} from '../../services/auth'



const StudentsAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [otpModal,setOtpModal] = useState(false)
    const [error,setError] = useState(false)
    const[spinner,setSpinner] = useState(false)
    const [login,setLogin] = useState(true)
    const [otpError,setOtpError] = useState(false)
    const getData = async (data, status) => {
      if (!data) return;
    
      if (status === true) {
        // signup
        try {
          setSpinner(true);
          const result = await checkEmail(data.email);
    
          if (result === true) {
            setOtpModal(true);
          }
        } catch (error) {
          if (error.code === "ERR_NETWORK"){
            navigate("/serverErrorPage")
          }
          if(error?.response?.data?.[0]){
             setError( error?.response?.data?.[0])
          }else{
             setError( error?.response?.data?.email?.[0])
          }
          setLogin(false)
        } finally {
          setSpinner(false);
        }
      } else {
        // login
        console.log("login")
        try {
          console.log("login")
          setSpinner(true);
          const userData = {email:data.email,password:data.password}
          const result = await signIn(userData);
          console.log("result",result)
          if (result) {
            dispatch(setUser(result.data))
            console.log("login succefull")
            navigate("/student/home",{replace:true})
            setError(false)
          }
        } catch (error) {
          console.log("error",error)
          if (error.code === "ERR_NETWORK"){
            navigate("/serverErrorPage")
          }
          if(error?.status === 400){
             setError( error?.response?.data?.non_field_errors?.[0])
          }else{
              navigate("/serverErrorPage")
          }
        
        } finally {
          setSpinner(false);
        }
      }
    };
    
    const getOtp = async(otp)=>{
      if (otp){
        try{
    const data = JSON.parse(localStorage.getItem("userData"));
    setSpinner(true)
    const otpData = {email:data.email,otp:otp}
    const result = await verfiyOtp(otpData)
    setSpinner(false)
    if(result === true){
      setOtpModal(false)
      setLogin(true)
      try{
      const data = JSON.parse(localStorage.getItem("userData"))
      setSpinner(true)
      const status = await register(data)
      setSpinner(false)
      if(status){
      setError(false)
      setOtpError(false)
      localStorage.removeItem('userData')
      toast.success('Signup successfully!')
      toast('Please login!', {
       icon: '🔐',});
      }
      }catch(error){
         console.log("error",error)
         if (error.code === "ERR_NETWORK"){
            navigate("/serverErrorPage")
          }
          setError("Some issue happend to your credentials,please reRegister again!")
          
      }
     
    }
  }
    catch(error){
      if (error.code === "ERR_NETWORK"){
            navigate("/serverErrorPage")
          }
      setOtpError("Invalid OTP!")
      setSpinner(false)
    }
   }
   }
   console.log("user",user)
   console.log("enter in studewnt authentication")
    return (
      <>
          <Toaster
  position="top-right"
  reverseOrder={true}
/>
        {spinner ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
            <Spinner/>
          </div>
        ) : (
          <AuthForm
            login={login}
            setLogin={setLogin}
            role="student"
            error={error}
            otpModal={otpModal}
            sendData={getData}
            sendOtp={getOtp}
            otpError={otpError}
            setOtpError={setOtpError}
           
          />
        )}
      </>
    );
}

export default StudentsAuth
