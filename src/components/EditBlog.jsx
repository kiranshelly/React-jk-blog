import { useState } from "react";
import { useParams,useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch'



const CreateBlog = () => {
  const history = useHistory();
  const [name, setTitle] = useState("");
  const { id } = useParams();
  const {arrays : array} = useFetch(' http://localhost:8000/arrays/' + id );
  // const history = useHistory();
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog = {name}

// POST Request
fetch('http://localhost:8000/arrays/' + id, {
  method:'PUT',
  headers:{
    'Accept':'application/json',
    "Content-Type":"application/json"
  },
  body: JSON.stringify(blog) //asynchronous that return promise after it fires the method then is completely works
  }).then(()=>{
    history.push('/');
  })


  }
    return ( 
  <div className="edit-blog">
      <h2>Add a New Blog</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="edit-title"> <strong>Previous Title: </strong> {array.name} </div> <br />
        <textarea  class="edit-text" type="text" required value={name} 
        placeholder = "Add new title here" 
        onChange={(e) => setTitle(e.target.value)}></textarea>
        <button>Add Blog</button>
      </form>
    </div>
          );
}
 
export default CreateBlog;