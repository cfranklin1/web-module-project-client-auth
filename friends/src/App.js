import React from 'react';
import {BrowserRouter as Router, Route , Link, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
//import FriendsList from './components/FriendsList';
import { axiosWithAuth } from './utils/axiosWithAuth';



function App() {

  const logout = () => {

    axiosWithAuth()
      .post()
      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err.response);
      });

  }


  


  return (
    <Router>
      <div className="App">
          <header className="App-header">
            <img src={"https://i.pinimg.com/564x/6d/3f/d3/6d3fd32059a6d841c959c823570d4131.jpg"} className="App-logo" alt="logo" />
            <p className="header-text">
              so no one told you life was gonna be this way..
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >  
            <p classname="login-link"><Link to="/login">Login</Link></p>
            <p className="logout-link"><Link onClick={logout}>Logout</Link></p>
            <p>
              {localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>}
            </p>
            </a>
          </header>


          
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
          
        </div>

    </Router>
 
  );
}

export default App;
