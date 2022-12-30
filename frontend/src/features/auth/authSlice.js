import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {authService} from "./authService"

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  // console.log(user);
  // console.log(thunkAPI.getState());
  // console.log(thunkAPI.dispatch(anyImportedMethod()));
  try{
    console.log(user);
    return await authService.register(user);

  } catch {
      thunkAPI.rejectWithValue("Registration error")
  }
});

// login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
});

export default authSlice.reducer;
