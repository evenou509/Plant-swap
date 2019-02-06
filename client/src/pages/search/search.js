// create a link to move to the swap page

import React, { Component } from 'react';
// import API from "../utils/API"
import axios from "axios";
import "./../pages.css";
import Cards from "./card";

class Search extends Component {
    state = {
        search_input: "",
        plantResults: [],
        error: ""
      };
    componentDidMount() {
        axios.get("http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e")
        .then((result) => {
            this.setState({
              isLoaded: true,
              plantResults: result.data
            });
            console.log(this.state.plantResults)
            const plants =  this.state.plantResults
         
           plants.forEach(info => console.log(info.name));

          })
          .catch(err => console.log(err));
      }



    handleInputChange = event => {
        this.setState({ search_input: event.target.value });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        
        const search = this.state.search_input
          console.log(search)

          const plants =  this.state.plantResults
          console.log("submit log", plants)
        //   plants.forEach(info => console.log(info.name));


         
          };

    

    render() {
        return (
            <div className="search-page">
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

            <div>
           {this.state.plantResults.filter( plants => plants.name === this.state.search_input).map( plants =>(
           <Cards
           name= {plants.name}
           description= {plants.description}/>
           ))}
           </div>
            </div>
        )
    }
}


export default Search;