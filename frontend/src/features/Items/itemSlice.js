import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { itemService } from "./itemService";

const initialState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

const getAllItems = createAsyncThunk("item/getAllItems", async (thunkAPI) => {
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

// const getItem = createAsyncThunk("item/getItem", async (itemId, thunkAPI) => {
//     try{
//         // return await itemService.getItem(itemId) 
//     } catch(error) {
//         const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
// })


const itemSlice = createSlice({
    name: "items",
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
        // .addCase(getItem.pending, (state) => {
        //     isLoading = true
        // })
        // .addCase(getItem.fulfilled, (state, action) => {
        //     isLoading = false
        //     isError = false
        //     isSuccess = true
        //     items = action.payload

        // })
        // .addCase(getItem.rejected, (state, action) => {
        //     isLoading = false
        //     isError = true
        //     message = action.payload
        // })
    }
})


export const {  } = itemSlice.actions;
export default itemSlice.reducer;