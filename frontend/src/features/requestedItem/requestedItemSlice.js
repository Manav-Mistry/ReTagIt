import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import requestedItemService from "./requestedItemService"

const initialState = {
    r_items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const viewAllRequests = createAsyncThunk("requestedItem/viewAllRequests", async(_, thunkAPI) => {
    try{
        console.log("In slice")
        return await requestedItemService.getAllRequests()
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

export const addRequestedItem = createAsyncThunk("requestedItem/addRequestedItem", async(r_item_user, thunkAPI) => {
    try {
        console.log("In slice",r_item_user)
        return await requestedItemService.addRequestedItem(r_item_user)
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

const requestedItemSlice = createSlice({
    name: "requestedItem",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addRequestedItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addRequestedItem.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(addRequestedItem.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(viewAllRequests.pending, (state) => {
                state.isLoading = true
            })
            .addCase(viewAllRequests.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.r_items = action.payload
            })
            .addCase(viewAllRequests.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export const  { reset } = requestedItemSlice.actions

export default requestedItemSlice.reducer