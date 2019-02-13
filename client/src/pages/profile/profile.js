import React, { Component } from 'react';
// import API from "../../utils/API"
// import jwt_decode from 'jwt-decode'



class Profile extends Component {
    state = {
        users: [],
        first_name: "",
        zipCode: "",
        about: "",
      };

    componentDidMount() {
      // const token = localStorage
      // const decoded = jwt_decode(token)

      // console.log(decoded)
        // this.loadCurrentUsers();
        // const token = localStorage.usertoken
        // const decoded = jwt_decode(token)
        // this.setState({
        //     first_name: decoded.first_name
        // })
  
      }
    
      // loadCurrentUsers = () => {
      //   API.getUser(id)
      //     .then(res => 
      //       this.setState({ users: res.data, first_name: "", zipCode: "", about: "" }),
      //       console.log(this.state.users)
      //     )
      //     .catch(err => console.log(err));
          
      // };
    

    render() {
        return (
        // <div> Profile Page </div>
        <div className="container">
        <div className="row">
            <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profile</h1>
            </div>
            <table className="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.first_name}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.last_name}</td>
                    </tr>
                    <tr>
                        <td></td>Email
                        <td>{this.state.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        )
    }
}


export default Profile;

