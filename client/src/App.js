import React, { Component } from 'react';
import Header from './components/header/header';
// import SignIn from './components/Route/home/signin';
import Home from './pages/home/home';
import Swap from './pages/swap';
import Search from './pages/search/search';
import Blog from './pages/blog';
import Profile from './pages/profile';
import Contact from './pages/contact';
import Signup from './pages/signup/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <Header/>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/swap" component={Swap} />
        <Route exact path="/search" component={Search} />
        <Route path="/blog" component={Blog} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />

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
