import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import requestedItemService from "./requestedItemService"

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const addRequestedItem = createAsyncThunk(("requestedItem/addRequestedItem", async(r_item,user, thunkAPI) => {
    try {
        return await requestedItemService.addRequestedItem(r_item, user)
    } catch(error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
}))

const requestedItemSlice = createSlice({
    name: "requestedItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addRequestedItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addRequestedItem.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(addRequestedItem.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export default requestedItemSlice.reducer