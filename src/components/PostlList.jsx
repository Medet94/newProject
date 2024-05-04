import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, createNewPost } from '../redux/slices/postSlice';
import Post from './Post';

function PostlList() {
  const [inputText, setInputText] = useState('');

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleCreatePost = (title) => {
    dispatch(createNewPost(title));
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Create new post"
          type="text"
          onChange={inputTextHandler}
        />
        <button onClick={() => handleCreatePost(inputText)}>Save</button>
      </div>

      {posts.map((post) => (
        <ol key={post.id}>
          <Post post={post} />
        </ol>
      ))}
    </div>
  );
}

export default PostlList;
