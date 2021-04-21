import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Dash from './components/Dash/Dash.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dash" component={Dash} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
