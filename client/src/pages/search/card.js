import React from "react";


function Cards (props){
    return(
        <div>
        <div className="card" >
         <div className="card-body">
         <h5 className="card-title">{props.name}</h5>
         <br/>
         <p className="card-text">Description:</p> 
         <p className="card-text">{props.description}</p> 
         <span >
        <button className="add" {...props} > Add to your List</button>
      </span>
         </div>
  </div>
  </div>



 

    )
}

export default Cards;


