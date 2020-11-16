import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './sections/Home';
import ScrollTopArrow from './components/ScrollTopArrow';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTopArrow/>
        <Navbar />
        <Switch>
          <Route path = '/' exact component={Home}/>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
