import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Favorite from './components/Favorite';
import Home from './components/Home';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/favorite">
              <Favorite />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
