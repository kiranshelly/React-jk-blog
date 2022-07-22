import { Link } from 'react-router-dom';
import useFetch  from '../hooks/useFetch';

const Blog = (  ) => {
    // Props destructing
   const {arrays, isPending } = useFetch('  http://localhost:8000/arrays')

    return ( 
        <div className="blog-list">
            <h2 class="title">All Blogs</h2>
        {isPending && <div>Loading....</div>}
        {arrays &&  arrays.map(array =>(
            <div  key={array.id}>
               <div className="text"> {array.id} -  {array.name}
            </div>
            <div className="blog-preview" >
                <Link to={`/array/${array.id}`}>
                Read More
                </Link>
                </div>
                </div> 
                
            ))
        }
        </div>
    );
}
 
export default Blog;