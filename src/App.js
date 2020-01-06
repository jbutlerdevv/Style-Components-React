import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Stuff from './components/Stuff';
import Layout from './components/Layout';

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/stuff" component={Stuff} />
            </Switch>
          </Router>
        </Layout>
      </>
    );
  }
}

export default App;
