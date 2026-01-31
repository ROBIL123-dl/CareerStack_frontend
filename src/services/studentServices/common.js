
import StudentsAuth from "../../users/students/studentsAuth";
import { api } from "../baseApi";

export const userHome = async () => {
  try {
    const res = await api.get("/student/home");
    console.log("success response:",res)
    return res.data;
  } catch (err) {
    if (err.response.status === 401) {
      StudentsAuth()
    }
    console.log("error",err)
    throw err;
  }
};