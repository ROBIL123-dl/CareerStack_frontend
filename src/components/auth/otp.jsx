import React, { useEffect, useRef, useState } from "react";
import Spinner from '../../components/common/spinner'
import { checkEmail } from '../../services/auth'


const OtpModal = ({ setOtpModal, sendOtp, otpError, setOtpError }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [secondsLeft, setSecondsLeft] = useState(120); // 2 minutes
  const [spinner, setSpinner] = useState(false)
  const inputsRef = useRef([]);


  // Restore timer on mount if there was an error (remount case)
  useEffect(() => {
    if (otpError) {
      const savedTime = localStorage.getItem("otp_time_end");
      if (savedTime) {
        setSecondsLeft(Number(savedTime));
      }
    }
  }, []);

  // Timer countdown and persistence
  useEffect(() => {
    if (spinner) {
      setOtpError(false);
    }
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = Math.max(0, prev - 1);
        localStorage.setItem("otp_time_end", next);
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, spinner, setOtpError]);

  const canResend = secondsLeft === 0;

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    // allow only digits
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto focus next
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setOtp(["", "", "", ""]);
    setSecondsLeft(120);
    localStorage.setItem("otp_time_end", 120);
    inputsRef.current[0].focus();
    try {
      setSpinner(true);
      const data = JSON.parse(localStorage.getItem("userData"));
      const result = await checkEmail(data.email);
      if (result === true) {
        console.log("OTP resent");
      }
    } catch (error) {
      console.log(error)
      if (error.code === "ERR_NETWORK") {
        navigate("/serverErrorPage")
      }
      console.log("error occur in resend otp!")
    } finally {
      setSpinner(false);
    }
  };


  const handleSubmit = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      setOtpError("Please enter valid 4-digit OTP");
      return;
    }
    sendOtp(enteredOtp)
    console.log("OTP verified:", enteredOtp);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {spinner ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
          <Spinner />
        </div>
      ) : null}
      <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl shadow-2xl p-8 relative">
        <h2 className="text-2xl font-bold text-[#191B32] text-center mb-2">
          Verify OTP
        </h2>

        <p className="text-[#9295A3] text-center mb-6">
          Enter the 4-digit code sent to your email or phone.
        </p>
        {otpError ? (
          <b className="text-red-500 text-sm block mt-[-20px] mb-1 text-center">
            {otpError}
          </b>
        ) : null}
        {/* OTP Inputs */}
        <div className="flex justify-around mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="
                w-10 h-12 sm:w-12 sm:h-14
                text-center text-lg font-bold
                border-2 border-[#9BA1FF]
                rounded-lg
                focus:outline-none
                focus:border-[#4ec692]
                focus:ring-2
                focus:ring-[#4ec692]/40
                transition-all
              "
            />
          ))}
        </div>

        {/* Timer + Resend */}
        <div className="flex items-center justify-center gap-4 mb-6 text-sm">
          <span className="text-[#9295A3]">Resend code in</span>
          <span className="font-mono font-semibold text-[#191B32]">
            {formatTime(secondsLeft)}
          </span>

          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`ml-4 text-sm font-medium ${canResend
              ? "text-[#FF7648] hover:text-[#e45f35]"
              : "text-gray-300 cursor-not-allowed"
              } transition-colors`}
          >
            Resend OTP
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="
            w-full
            bg-gradient-to-r
            from-[#4ec692]
            to-[#9BA1FF]
            text-white
            font-bold
            py-3
            rounded-lg
            transition-all
            duration-300
            shadow-md
            hover:shadow-lg
            active:scale-95
          "
        >
          Verify
        </button>

        <div
          className="
          w-full h-1 mt-6
          bg-gradient-to-r
          from-[#4ec692]
          to-[#9BA1FF]
          rounded-full
        "
        />
      </div>
    </div>
  );
};

export default OtpModal;
