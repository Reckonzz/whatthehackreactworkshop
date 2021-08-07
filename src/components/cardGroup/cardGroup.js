import React, { useState } from "react";
// import your stylesheet (change the filename)
import "./cardGroup.styles.css"
import Card from "./card/card"
import ToggleButton from "./toggleButton/toggleButton"

import { faRobot, faLaptopCode, faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const CardGroup = () => { 
    const [theme, setTheme] = useState("light") 

    const toggleTheme = () => { 
        if (theme === "light") {
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    let arr = [
        {    
            icon: faLaptopCode,
            title: "Software Engineering",
            description: "Software Engineering has never been just about merely coding, but also coming up with solutions for real life problems, and that is my passion"
        }, 
        { 
            icon: faRobot,
            title: "Robotics Engineer",
            description: "Robotics will definitely change the world and is one of the coolest things you could possibly dabble in. Robotics is a field that can definitely be supercharged by creative software and hardware developers"
        },
        { 
            icon: faBreadSlice,
            title: "Bread",
            description: "This is perhaps the most important section, and that is relationships, I will not forget all the bread with egg that my roommate cooked for me when I was in hostel. "
        },
    ]
    return (
        <div className="card-group-container">
            <ToggleButton handleClick={toggleTheme}/>
            <div className="card-group"> 
                {arr.map(card => <Card icon={card.icon} title={card.title} description={card.description} theme={theme}/>)}
            </div>
        </div>
    )
};

export default CardGroup