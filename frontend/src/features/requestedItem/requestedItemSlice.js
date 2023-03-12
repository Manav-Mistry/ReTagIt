import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import requestedItemService from "./requestedItemService"

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

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
                console.log("in fulfilled")
            })
            .addCase(addRequestedItem.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export const  { reset } = requestedItemSlice.actions

export default requestedItemSlice.reducer