import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Context from './context/index';
import { increment, decrement } from './redux/slices/counterSlice';
import { fetchTodos, deletePost, updatePost } from './redux/slices/postSlice';
// Components
import PostlList from './components/PostlList';
import MessageList from './components/MessageList';
import Input from './components/Input';

// Styles
import { Wrapper } from './styles/wrapperStyle';
import { PostStyle } from './styles/postsStyle';
import { MessageStyle } from './styles/messageStyle';
import { InputStyle } from './styles/inputStyle';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.count);
  // const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  const plus = () => {
    dispatch(increment());
  };

  const minus = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const handleUpdate = () => {
    dispatch(updatePost());
  };

  return (
    <>
      <Context.Provider>
        <Wrapper>
          <PostStyle>
            <PostlList />
          </PostStyle>
          <MessageStyle>
            <MessageList />
          </MessageStyle>
        </Wrapper>
        <InputStyle>
          <Input />
        </InputStyle>
      </Context.Provider>
      <div>
        <div>{count}</div>
        <button onClick={plus}>Increment</button>
        <button onClick={minus}>Decrement</button>
      </div>
    </>
  );
}

export default App;
