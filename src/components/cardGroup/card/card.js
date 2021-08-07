// you can copy this template to use for any of your Cards 

import React from "react";
// import your stylesheet (change the filename)
import "./card.styles.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import other Cards to include 

const Card = (props) => { 
    return (
        <div className="card" style={props.theme === "light" ? {backgroundColor: "azure"} : {backgroundColor: "black"}}> 
            <FontAwesomeIcon className="icon" icon = {props.icon} style={props.theme === "light" ? {color: "paleVioletRed"} : {color: "yellow"}}/>
            <div className="card-title" style={props.theme === "light" ? {color: "black"} : {color: "white"}}>{props.title}</div>
            <div className="card-description" style={props.theme === "light" ? {color: "black"} : {color: "white"}}>{props.description}</div>
        </div>
    )
};

export default Card