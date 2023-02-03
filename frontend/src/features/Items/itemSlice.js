import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import itemService  from "./itemService";

const initialState = {
    items: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getAllItems = createAsyncThunk("item/getAllItems", async (thunkAPI) => {
    try{
        return await itemService.getAllItems() 
    } catch(error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
})

export const addItem = createAsyncThunk("item/addItem", async (item, thunkAPI) => {
    try{
        return await itemService.addItem(item) 
    } catch(error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
})


const itemSlice = createSlice({
    name: "item",
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(getAllItems.pending, (state) => {
            isLoading = true
        })
        .addCase(getAllItems.fulfilled, (state, action) => {
            isLoading = false
            isError = false
            isSuccess = true
            items = action.payload

        })
        .addCase(getAllItems.rejected, (state, action) => {
            isLoading = false
            isError = true
            message = action.payload
        })
     
    }
})


export const {  } = itemSlice.actions;
export default itemSlice.reducer;