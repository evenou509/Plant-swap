import React from "react";


function Cards (props){
    return(
        <div className=" bio-holder">
        <div className="card card-style">
         <div className="card-body">
         <h5 className="card-title">{props.name}</h5>
         <br/>
         <p className="card-text">Description:</p> 
         <p className="card-text">{props.description}</p> 
         </div>
  </div>
  </div>



 

    )
}

export default Cards;


