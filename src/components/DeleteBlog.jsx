import { useParams,useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';


const DeleteBlog = () => {
    const history = useHistory();
    const { id } = useParams();
  
    const handleDelete = () => {
        fetch('http://localhost:8000/arrays/' + id, {
        method: 'DELETE'
        }).then(() => {
        history.push('/');
        }) 
    }

    return ( 
    <div className="delete-edit">
        Are you sure   want to delete this ?
        <button onClick={handleDelete}> Delete</button>
        <Link class="cancel" to={`/edit/${id}`}> Cancel </Link>

    </div> );
}
 
export default DeleteBlog;