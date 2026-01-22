
import axios from "axios";

const baseurl = "http://127.0.0.1:8000";

export const checkEmail = async (email) => {
  try {
    const res = await axios.post(
      `${baseurl}/auth/verifyEmail/`,
      { email }
    );
    console.log("success response:",res)
    return true;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
};

export const verfiyOtp = async (data) => {
  try {
    const res = await axios.post(
      `${baseurl}/auth/verifyOtp/`,
      data
    );
    return true;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
};

export const register = async (userData) => {
  try {
    const res = await axios.post(
      `${baseurl}/auth/signup/`,
       userData
    );
    return true;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
};





