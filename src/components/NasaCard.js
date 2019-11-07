import React from "react";


const NasaCard = props => {

    return (
        <div className="nasa-card">
            <img src= {props.hdurl} alt="space"/>
           <h2>{props.title}</h2>
           <p>{props.date}</p> 
           <p>{props.explanation}</p>
           
        </div>
    )
}

export default NasaCard;