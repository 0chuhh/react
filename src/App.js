import React, {useState, useRef} from 'react'
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

// import ClassCounter from './components/ClassCounter.jsx';
// import Counter from './components/Counter.jsx'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id:0, title: 'javascript', body:'decription'},
    {id:1, title: 'javascript 2', body:'decription'},
    {id:2, title: 'javascript 3', body:'decription'}
  ])
  const [post, setPost] = useState({title: '', body:''})
  const addNewPost = (e)=>{
   e.preventDefault()
   
   setPosts( [...posts, {...post, id:Date.now()}])
   setPost({title: '', body:''})
 }

  return (
    <div className="App">
        <form action="">
          {/* Управляемый */}
          <MyInput 
            type="text"
            placeholder='Название'
            value={post.title}
            onChange = {e => setPost({...post,title: e.target.value})}
            />
            {/* Неуправляемый */}
          <MyInput
            type="text"
            placeholder='Описание'
            value={post.body}
            onChange={e=>setPost({...post, body: e.target.value})}
            />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={"Посты про Js"}/>
     
    </div>
  );
}

export default App;
