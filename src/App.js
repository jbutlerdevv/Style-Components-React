import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Stuff from './components/Stuff';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
