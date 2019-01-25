import React, { Component } from 'react';

class SignIn extends Component {
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
            alert("You email and password do not match")
        }
    }

    render() {
        return(
            <div>
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
        </form>
      </div>
        )
    }
}


export default SignIn;