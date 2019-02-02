import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    state = {
        email: '',
        password: '',
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.email;

        if(name === "password") {
            value = value.substring(0, 15);
        }

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(!this.state.email || !this.state.password){
            alert("Your email and password do not match")
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      };

    render() {
        return (
            <header>
                
                    <nav className="navbar navbar-expand-lg navbar-light nav-garden">
                        <a className="navbar-brand" href="/">Let's Garden</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="/">Home</a>
                                <a className="nav-item nav-link" href="/swap">Swap Plants!</a>
                                <a className="nav-item nav-link" href="/search">Search Plants</a>
                                <a className="nav-item nav-link" href="/blog">Blog/News</a>
                                <a className="nav-item nav-link" href="/profile">My Profile</a>
                                <a className="nav-item nav-link" href="/contact">Contact Us</a>
                                <ul className="nav">
                                    <li className="nav-item">  <div>
        {/* <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p> */}
        <form className="form">
          <input
            value={this.state.email}
            name="Email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          
          <button onClick={this.handleFormSubmit}>Submit</button>
          <a role="button" className="btn bth-primary" href="/signup" >Sign Up</a>
        </form>


      </div> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                

            </header>
        )
    }
}


export default Header;