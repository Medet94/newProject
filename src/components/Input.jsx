import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Input() {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleMessageSend = () => {};

  return (
    <div>
      <input placeholder="new message..." type="text" onChange={handleInput} />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
}

export default Input;
