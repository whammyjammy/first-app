import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreateBlog from './Components/CreateBlog';
import BlogDetails from './Components/BlogDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
