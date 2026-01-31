import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/baseApi";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.get("/auth/authStatus/");
            return res.data; 
        } catch (err) {
            return rejectWithValue(err.response?.data || "Failed");
        }
    }

);
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            userId: null,
            email: null,
            role: null,
            isBlocked: null,
            isAuthenticated: false
        },
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            console.log("executeing 1")
            state.user.userId = action.payload.user_id
            state.user.email = action.payload.email
            state.user.role = action.payload.role
            state.user.isBlocked = action.payload.status
            state.user.isAuthenticated = true

        },
        setLogout: (state) => {
         
            state.user.userId = null
            state.user.email = null
            state.user.role = null
            state.user.isBlocked = null
            state.user.isAuthenticated = false

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
              console.log("executeing  set prending")
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.userId = action.payload.user_id
                state.user.email = action.payload.email
                state.user.role = action.payload.role
                state.user.isBlocked = action.payload.status
                state.user.isAuthenticated = true
            })
            .addCase(fetchUser.rejected, (state, action) => {
                 console.log("executeing  set rejected")
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default userSlice.reducer
export const { setUser, setLogout, updateUser, removeUser } = userSlice.actions