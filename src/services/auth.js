import {api} from "./baseApi";


export const checkEmail = async (email) => {
  try {
    const res = await api.post(
      `/auth/verifyEmail/`,
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
    const res = await api.post(
      `/auth/verifyOtp/`,
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
    const res = await api.post(
      `/auth/signup/`,
       userData
    );
    return true;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
};

export const signIn = async (userData) => {
  try {
    const res = await api.post(
      `/auth/login/`,
       userData
    );
    console.log("success response:",res)
    return res.data;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
};


export const logOut = async()=>{
   try {
    const res = await api.post(
      `/auth/logout/`,
    );
    return res.data.data;
  } catch (err) {
    console.log("error",err)
    throw err;
  }
}





