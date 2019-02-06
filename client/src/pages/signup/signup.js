import React, { Component } from 'react';
import API from '../../utils/API';
import "./signup.css";


class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zipCode: '',
    about: '',
  }

  handleInputChange = event => {
    const {name, value} = event.target;
 
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstName)
    API.newUser({
      first_name:this.state.firstName,
      last_name:this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      zipCode: this.state.zipCode,
      about: this.state.about
    }).then(
      console.log("New User submitted")
    ) 
    // .catch(err => console.log(err));
    // if (!this.state.email || !this.state.password) {
    //   alert("Your email and password do not match")
    // }
  }

  render() {
    return (
      <div className="page-body">
      <div className="container">
      <div className="holder container">
        <form className="form">
          <div className="form-row">
          <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            />
            
          </div>

            <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
           </div>
          </div>

          <div className="form-row">
          <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.email}
            name="Email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          </div>
          <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          </div>
          </div>

          <div className="form-row">
          <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.zipCode}
            name="zipCode"
            onChange={this.handleInputChange}
            type="zipCode"
            placeholder="Zip Code"
          />
         </div>
         <div className="col-md-5 mb-3">
            <input className="form-control"
            value={this.state.about}
            name="about"
            onChange={this.handleInputChange}
            type="about"
            placeholder="About"
          />
          </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
          
        </form>
        </div>
        </div>
      </div>
    )
  }
}


export default Signup;