import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Home from './components/Home/Home.js';
import Login from './components/Authentication/Login.js';
import Signup from './components/Authentication/Signup.js';
import Dash from './components/Dash/Dash.js';
import Settings from './components/Authentication/Settings.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dash" component={Dash} />
          <PrivateRoute path="/settings" component={Settings} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
