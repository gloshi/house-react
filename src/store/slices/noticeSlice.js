import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotices = createAsyncThunk('notices/getNotices', async (_,thunkApi) => {
    try {
        const res = await axios('https://643453a31c5ed06c9594d5ed.mockapi.io/posts')
        return res.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }
})


const noticeSlice = createSlice({
    name: 'notices',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getNotices.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getNotices.fulfilled, (state, action) => {
          state.list = action.payload;
          state.isLoading = false;
        });
        builder.addCase(getNotices.rejected, (state, action) => {
            console.log(state)
            state.isLoading = false;
          });
      },
})
export default noticeSlice.reducer;