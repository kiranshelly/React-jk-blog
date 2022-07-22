import {React} from "react";
import Blog from './Blog';
import useFetch from '../hooks/useFetch'

const Home = () => {

// useState hooks


// Arrays destructing
const {arrays} = useFetch(' http://localhost:8000/arrays')

    return (
        <div  className="home">
      { arrays && <Blog arrays={arrays} />}
        </div>
     );
}
 
export default Home;