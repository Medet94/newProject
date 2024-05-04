import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import postSlice from './slices/postSlice';
import commentsSlice from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
    comments: commentsSlice,
  },
});

export default store;
