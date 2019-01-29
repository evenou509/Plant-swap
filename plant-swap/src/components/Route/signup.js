import React, { Component } from 'react';

class Signup extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmationPassword: '',
    zipCode: '',
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.email;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Your email and password do not match")
    }
  }

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.fullName}
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Full Name"
          />
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
          <input
            value={this.state.confirmationPassword}
            name="confirmationPassword"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Conformation Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          
        </form>

      </div>
    )
  }
}


export default Signup;