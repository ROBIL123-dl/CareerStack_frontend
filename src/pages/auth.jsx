import React, { useState, useEffect } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import Icon from "../components/common/icon";
import Alert from '@mui/material/Alert';
import OtpModal from '../components/auth/otp';
import signupImg from "../assets/images/signup.png";
import loginImg from "../assets/images/login.png";


const theme = {
  primary: "#4ec692",
  secondary: "#9BA1FF",
  tertiary: "#FF7648",
  textMain: "#191B32",
  textBody: "#9295A3",
  bgLight: "#f6f8f7",
};

export default function AuthForm({ role, login, setLogin, error, otpModal, sendData, sendOtp, otpError, setOtpError }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    Cpassword: "",
  });
  const [formError, setFormError] = useState({});
  useEffect(() => {
    if (!login) {
      setIsSignUp(true)
    }
    if (error) {
      const data = JSON.parse(localStorage.getItem("userData"));
      setFormData(data)
    }
  }, [])


  const inputStyle = { borderColor: theme.secondary };
  const inputPadding = isSignUp ? "py-2" : "py-3";
  const formSpacing = isSignUp ? "space-y-2" : "space-y-5";
  const labelSize = isSignUp ? "text-xs" : "text-sm";

  const handleFocus = (e) => {
    e.target.style.borderColor = theme.primary;
    e.target.style.boxShadow = "0 0 0 2px rgba(78,198,146,0.3)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = theme.secondary;
    e.target.style.boxShadow = "none";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (data) => {
    const errors = {};
    const validData = {};

    if (isSignUp) {
      if (!/^[A-Za-z]{2,}$/.test(data.first_name)) {
        errors.first_name = "First name must contain only letters and at least 2 characters!";
      } else {
        validData.first_name = data.first_name;
      }

      if (!/^[A-Za-z]+$/.test(data.last_name)) {
        errors.last_name = "Last name must contain only letters!";
      } else {
        validData.last_name = data.last_name;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Enter a valid email address!";
    } else {
      validData.email = data.email;
    }

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)) {
      errors.password =
        "Password must be at least 8 characters,Must contain 1 upper and 1digit";
    } else {
      validData.password = data.password;
    }

    if (isSignUp && data.password !== data.Cpassword) {
      errors.Cpassword = "Both passwords do not match!";
    }

    if (Object.keys(errors).length === 0) {
      return { isValid: true, data: validData };
    }

    return { isValid: false, errors };
  };

  // otp
  const getOtp = (otp) => {
    if (otp) {
      sendOtp(otp)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate(formData);
    if (result.isValid) {
      let status = null
      if (isSignUp) {
        console.log("signup handler")
        status = true
      }
      else {
        console.log("login handler")
        status = false
      }
      if (result.data) {
        sendData(result.data, status);
        const data = { ...result.data, role };
        localStorage.setItem("userData", JSON.stringify(data));
      }
      setFormError({});
    } else {
      setFormError(result.errors);
    }
  };
  console.log("isSignUp", isSignUp)
  console.log("login", login)
  return (
    <>
      {otpModal && <OtpModal sendOtp={getOtp} otpError={otpError} setOtpError={setOtpError} />}

      <div
        className="min-h-screen flex items-center justify-center p-4"

      >
        <div className="relative w-full max-w-5xl">
          <div
            className={`bg-white overflow-hidden flex flex-col md:flex-row ${isSignUp ? "md:min-h-[640px]" : "md:h-[610px]"
              }`}
          >
            {/* LEFT */}
            <div
              className={`w-full md:w-1/2 flex flex-col justify-center ${isSignUp ? "p-5 md:p-7" : "p-8 md:p-10"
                }`}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-1">
                  <Icon />
                </div>
                <p className="text-xs" style={{ color: theme.textBody }}>
                  {isSignUp ? "Create your account" : "Welcome back"}
                </p>
              </div>

              {/* Google Button (UNCHANGED) */}
              <button className="w-full mb-4 py-2.5 border rounded-lg flex items-center justify-center gap-3 text-sm font-semibold hover:shadow-md transition-all duration-200">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-4 h-4"
                  alt="google"
                />
                Continue with Google
              </button>
              {
                error && (
                  <Alert severity="error" color="error">
                    {error}
                  </Alert>
                )}
              <form className={formSpacing} onSubmit={handleSubmit}>
                {isSignUp && (
                  <>
                    <Input
                      label="First name"
                      icon={User}
                      inputPadding={inputPadding}
                      labelSize={labelSize}
                      handleFocus={handleFocus}
                      handleBlur={handleBlur}
                      inputStyle={inputStyle}
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      error={formError.first_name ? formError.first_name : null}
                      placeholder="Enter your first name"
                    />

                    <Input
                      label="Last name"
                      icon={User}
                      inputPadding={inputPadding}
                      labelSize={labelSize}
                      handleFocus={handleFocus}
                      handleBlur={handleBlur}
                      inputStyle={inputStyle}
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      error={formError.last_name ? formError.last_name : null}
                      placeholder="Enter your last name"
                    />
                  </>

                )}

                <Input
                  label="Email Address"
                  icon={Mail}
                  type="email"
                  inputPadding={inputPadding}
                  labelSize={labelSize}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  inputStyle={inputStyle}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={formError.email ? formError.email : null}
                  placeholder="Enter your email"
                />

                {/* Password */}
                <div className="space-y-1">
                  <label className={`${labelSize} font-semibold`}>Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-11 pr-12 ${inputPadding} border rounded-lg focus:outline-none transition placeholder:text-gray-400 placeholder:text-sm`}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      error={formError.password ? formError.password : null}
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff size={18} className="text-gray-500" /> : <Eye size={18} className="text-gray-500" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <Input
                    label="Confirm Password"
                    icon={Lock}
                    type="password"
                    inputPadding={inputPadding}
                    labelSize={labelSize}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    inputStyle={inputStyle}
                    name="Cpassword"
                    value={formData.Cpassword}
                    onChange={handleChange}
                    error={formError.Cpassword ? formError.Cpassword : null}
                    placeholder="Confirm your password"
                  />
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 text-white"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                  onClick={handleSubmit}
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="mt-4 text-center text-xs" style={{ color: theme.textBody }}>
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => { setIsSignUp(!isSignUp); setLogin(!login) }}
                  style={{ color: theme.tertiary }}
                  className="font-semibold"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            {/* RIGHT IMAGE (UNCHANGED) */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white">
              <img
                src={
                  isSignUp
                    ? signupImg
                    : loginImg
                }
                className="max-h-[420px] object-contain"
                alt="auth"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Input({
  label,
  icon: Icon,
  type = "text",
  inputPadding,
  labelSize,
  handleFocus,
  handleBlur,
  inputStyle,
  value,
  name,
  onChange,
  error,
  placeholder
}) {
  return (
    <div className="space-y-1">
      <label className={`${labelSize} font-semibold`}>{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type={type}
          value={value}
          name={name}
          className={`w-full pl-11 pr-4 ${inputPadding} border rounded-lg focus:outline-none transition placeholder:text-gray-400 placeholder:text-sm`}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && (
          <p className="text-red-600 text-xs mt-1">
            {error}
          </p>
        )}
      </div>
    </div>

  );
}
