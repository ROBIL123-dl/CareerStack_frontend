import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../../pages/auth'
import Spinner from '../../components/common/spinner'
import {checkEmail,verfiyOtp,register} from '../../services/auth'
import toast,{Toaster} from 'react-hot-toast'


const StudentsAuth = () => {
    const navigate = useNavigate();
    const [otpModal,setOtpModal] = useState(false)
    const [error,setError] = useState(false)
    const[spinner,setSpinner] = useState(false)
    const [login,setLogin] = useState(false)
    const [otpError,setOtpError] = useState(false)
    const[loginTrue,setLoginTrue] = useState(true)
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
          setLoginTrue(false)
        } finally {
          setSpinner(false);
        }
      } else {
        // login
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
          setLoginTrue(false)
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
            role="student"
            error={error}
            otpModal={otpModal}
            sendData={getData}
            sendOtp={getOtp}
            otpError={otpError}
            setOtpError={setOtpError}
            loginTrue={loginTrue}
          />
        )}
      </>
    );
}

export default StudentsAuth
