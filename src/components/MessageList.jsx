import React from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';

function MessageList() {
  const comments = useSelector((state) => state.comments.comments);

  console.log(comments);

  return (
    <div>
      {comments.map((comment) => {
        <Message comment={comment} />;
      })}
    </div>
  );
}

export default MessageList;
