import React from "react";


function Cards (props){
    return(
        <div>
        <div className="card card-style" >
        </div>
         <div className="card-body">
         <h5 class="card-title">Name: {props.name} </h5>
         <p class="card-text">Description: {props.description} </p> 
  </div>
  </div>



 

    )
}

export default Cards;


