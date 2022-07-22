import { useState } from "react";
import { useHistory } from 'react-router-dom';


const CreateBlog = () => {
  const history = useHistory();
  const [name, setTitle] = useState('Hello');



  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog = {name}
//     console.log(blog)
// console.log('New data added')

// POST Request
fetch('http://localhost:8000/arrays', {
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body: JSON.stringify(blog) //asynchronous that return promise after it fires the method then is completely works
  }).then(()=>{
    history.push('/');
  })


  }
    return ( 
          <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <textarea 
          type="text" 
          required 
          className="input-text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
  
        <button>Add Blog</button>
      </form>
    </div>
          );
}
 
export default CreateBlog;