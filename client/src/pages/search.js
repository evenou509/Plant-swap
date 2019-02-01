// create a link to move to the swap page

import React, { Component } from 'react';
import API from "../utils/API"

class Search extends Component {
    state = {
        search_input: "",
        results: [],
        error: ""
      };

    handleInputChange = event => {
        this.setState({ search_input: event.target.value });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        API.search()
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
          console.log(this.state.results)
          console.log(this.state.search_input)
    
          
      };

    render() {
        return (
            <div>
                <div> Search Page </div>
            <form>
                <label> Search a plant!</label>
                <input
            value={this.state.search_input}
            name="search_Input"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search here!"
          />
           <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}


export default Search;