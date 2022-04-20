import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
    const addNewPost = (e)=>{
        e.preventDefault()
        
        // setPosts( [...posts, {...post, id:Date.now()}])
        // setPost({title: '', body:''})
      }
      const [post, setPost] = useState({title: '', body:''})
      
      const createPost = (e)=>{
        e.preventDefault()
        props.parentCallback(post)
        setPost({title: '', body:''})

      }
    return ( 
        <div>
            <MyInput 
            type="text"
            placeholder='Название'
            value={post.title}
            onChange = {e => setPost({...post, title: e.target.value})}
            />
         
          <MyInput
            type="text"
            placeholder='Описание'
            value={post.body}
            onChange={e=>setPost({...post, body: e.target.value})}
            />
          <MyButton onClick={createPost}>Создать пост</MyButton>
        </div>
     );
}
 
export default PostForm
;