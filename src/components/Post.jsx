import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getComments } from '../redux/slices/commentsSlice';
//import { RiEdit2Fill } from 'react-icons/ri';
import { updatePost } from '../redux/slices/postSlice';

function Post({ post }) {
  const [updateInputText, setUpdateInputText] = useState('');
  const [selectedPostId, setSelectedPostId] = useState('');

  const dispatch = useDispatch();

  const onChatItemHandler = (id) => {
    console.log(id);
    setSelectedPostId(id);
    dispatch(getComments(id));
  };
  const updatePostInput = (e) => {
    // console.log(e.target.value);
    setUpdateInputText(e.target.value);
  };

  const updatePostHandler = (id, title) => {
    dispatch(updatePost(id, title));
  };

  return (
    <div>
      <span>
        <input placeholder="Rename post" onChange={updatePostInput} />
        <button
          onClick={() => updatePostHandler(selectedPostId, updateInputText)}
        >
          Save
        </button>
      </span>
      <li key={post.id} onClick={() => onChatItemHandler(post.id)}>
        {post.title}
      </li>
    </div>
  );
}

export default Post;
