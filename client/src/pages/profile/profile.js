import React, { Component } from 'react';
import API from "../../utils/API"



class Profile extends Component {
    state = {
        users: [],
        first_name: "",
        zipCode: "",
        about: "",
      };

    componentDidMount() {
        this.loadCurrentUsers();
      }
    
      loadCurrentUsers = () => {
        API.getUsers()
          .then(res => 
            this.setState({ users: res.data, first_name: "", zipCode: "", about: "" }),
            console.log(this.state.users)
          )
          .catch(err => console.log(err));
          
      };
    

    render() {
        return (
        <div> Profile Page </div>
        )
    }
}


export default Profile;

