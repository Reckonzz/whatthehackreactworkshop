// you can copy this template to use for any of your Cards 

import React from "react";
// import your stylesheet (change the filename)
import "./card.styles.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import other Cards to include 

const Card = (props) => { 
    return (
        <div className="card"> 
            <FontAwesomeIcon className="icon" icon = {props.icon}/>
            <div className="card-title">{props.title}</div>
            <div className="card-description">{props.description}</div>
        </div>
    )
};

export default Card