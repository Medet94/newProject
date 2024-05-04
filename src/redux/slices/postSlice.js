import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getAllPosts, updatePostById } from '../../utils/url';

// Fetch Functionality

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function () {
    const response = await fetch(getAllPosts);
    const data = await response.json();

    return data;
  }
);

export const createNewPost = createAsyncThunk(
  'post/createNewPost',
  async function (title) {
    try {
      const response = await axios.post('http://localhost:4000/posts', {
        id: uuidv4(),
        title: title,
        views: Math.random() * 100,
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error('Ошибка при отправке комментария:', err);
    }
  }
);

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async function (id, title) {
    try {
      const response = await axios.patch(`${updatePostById}${id}`, {
        title: title,
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении поста:', error);
    }
  }
);

export const deletePost = createAsyncThunk(
  'comment/deleteComment',
  async function (id) {
    const response = await axios.delete(`http://localhost:4000/posts/${id}`);
    const data = response.json();
    console.log(data);
    return data;
  }
);
export const getMessagesByPostId = createAsyncThunk(
  'comments/getAllComments',
  async (postId) => {
    const response = await axios.get(
      `http://localhost:4000/comments?postId=${postId}`
    );

    return response.data;
  }
);

//Slice

const postSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: '', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'resolved';

      state.posts = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(deletePost.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(createNewPost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    });
    builder.addCase(updatePost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
