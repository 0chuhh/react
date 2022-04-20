import React, {useState, useRef} from 'react'
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
// import ClassCounter from './components/ClassCounter.jsx';
// import Counter from './components/Counter.jsx'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id:0, title: 'javascript', body:'decription'},
    {id:1, title: 'javascript 2', body:'decription'},
    {id:2, title: 'javascript 3', body:'decription'}
  ])
  
  const addNewPost = (childData)=>{   
   setPosts( [...posts, {...childData, id:Date.now()}])
   console.log(childData)
 }
  const som = useRef()
  
  return (
    <div className="App">
        <form action="">
          {/* Управляемый */}
          <PostForm parentCallback={addNewPost}></PostForm>
        </form>
        <PostList posts={posts} title={"Посты про Js"}/>
        <button  
          onMouseEnter={()=>som.current.style.display='block'}
          onMouseLeave={()=>som.current.style.display='none'}
          >drop button</button>

        <div ref={som} className='drop'>
          lorem lorem lorem
        </div>
    </div>
  );
}

export default App;
