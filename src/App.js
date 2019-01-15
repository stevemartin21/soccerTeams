import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import PrivateRouter from './components/PrivateRouter';
import { setCurrentUser, logoutUser} from './actions/authActions';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Register from './components/authenAuthor/Register';
import Login from './components/authenAuthor/Login';
import AddTeam from './components/teams/AddTeam';
import AddPlayer from './components/players/AddPlayer';
import AddGame from './components/games/AddGame';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
          <div >
            <Navigation />
            <Route exact path='/' component={ Home } />
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            
           
            <Switch>
              <PrivateRouter exact path='/addGame' component={AddGame} />
              <PrivateRouter exact path='/addTeam' component={AddTeam} />
              <PrivateRouter exact path='/addPlayer' component={AddPlayer} />
          </Switch>
            <Footer />

          </div>
          </Router>
      </Provider>
    );
  }
}

export default App;