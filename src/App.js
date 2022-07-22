import './App.css';
import  Home from './components/Home';
import  Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import EditBlog from './components/EditBlog';
import DeleteBlog from './components/DeleteBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/create"> <CreateBlog /> </Route>
          <Route path="/array/:id"> <BlogDetails /> </Route>
          <Route path="/edit/:id"> <EditBlog /> </Route>
          <Route path="/delete/:id"> <DeleteBlog /> </Route>
        </Switch>
        </div>
  </div>
    </Router>
 
  );
}

export default App;
