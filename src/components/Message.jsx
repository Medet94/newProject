import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Message({ comment }) {
  //const comments = useSelector((state) => state.comments.comments);

  // console.log(comments);

  return (
    <div>
      <h3>{comment.text}</h3>;
    </div>
  );
}

export default Message;
