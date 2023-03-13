import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import itemService  from "./itemService";

const initialState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getAllItems = createAsyncThunk("item/getAllItems", async (_, thunkAPI) => {
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
        console.log("In addItem itemSlice")
        console.log(item.selectedFile)
        // create a new formdata for the 
        const formdata = new FormData()
        formdata.append("imagefile", item.selectedFile)

        for (var key of formdata.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        const fileId = await itemService.addImage(formdata)
        console.log(fileId)
        item.selectedFile = fileId.id
        console.log("Item", item)
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
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder 
        .addCase(getAllItems.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.items = action.payload

        })
        .addCase(getAllItems.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(addItem.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.message = action.payload

        })
        .addCase(addItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
     
    }
})


export const { reset } = itemSlice.actions;
export default itemSlice.reducer;