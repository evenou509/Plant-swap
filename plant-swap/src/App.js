import React, { Component } from 'react';
import Header from './components/header';
// import SignIn from './components/Route/home/signin';
import Home from './components/Route/home/home';
import Swap from './components/Route/swap';
import Search from './components/Route/search';
import Blog from './components/Route/blog';
import Profile from './components/Route/profile';
import Contact from './components/Route/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/swap" component={Swap} />
        <Route exact path="/search" component={Search} />
        <Route path="/blog" component={Blog} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        </div>
        </Router>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
