import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const {arrays : array} = useFetch(' http://localhost:8000/arrays/' + id );

    return ( 
    <div  className="blog-details">
            <h2> Blog - {id}</h2>  
            <div className=" card card-1 "> {array.name} </div>   
            <div className=' edit links'>
            <Link  to={`/delete/${id}`}>
                    Delete
                </Link>            
            <Link  to={`/edit/${id}`}>
                    Edit
                </Link>

            </div>
            

    </div> 
    );
}
 
export default BlogDetails;