import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCommentsByPostId } from '../../utils/url';
//import axios from 'axios';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async function (postId) {
    const response = await fetch(`${getCommentsByPostId}${postId}`);
    const data = await response.json();

    return data;
  }
);

// export const fetchDeleteComment = createAsyncThunk(
//   'comment/deleteComment',
//   async function () {
//     const response = await axios.delete('http://localhost:4000/comments/1');
//     const data = response.json();

//     return data;
//   }
// );

const commentsSlice = createSlice({
  name: 'comments',
  initialState: { comments: [], isLoading: false, error: null },
  reducers: {},

  // async functions
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state) => {
      state.isLoading = false;
    });
    // builder.addCase(fetchDeleteComment.pending, (state) => {
    //   state.status = 'loading';
    // });
    // builder.addCase(fetchDeleteComment.fulfilled, (state, action) => {
    //   state.comments = action.payload;
    // });
    // builder.addCase(fetchDeleteComment.rejected, (state, action) => {
    //   state.status = 'rejected';
    //   state.error = action.payload;
    // });
  },
});

export default commentsSlice.reducer;
