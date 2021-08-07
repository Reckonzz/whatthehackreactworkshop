import React from "react";
// import your stylesheet (change the filename)
import "./toggleButton.styles.css"

// import other ToggleButtons to include 

const ToggleButton = (props) => { 
    return (
        <button className="toggle-button" onClick={props.handleClick}> 
            Change Theme!
        </button>
    )
};

export default ToggleButton