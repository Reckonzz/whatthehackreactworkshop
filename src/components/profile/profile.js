import React from "react";
// import your stylesheet (change the filename)
import "./profile.styles.css"
import profilePic from "../../assets/images/profilePic.jpg"

const ProfilePage = () => { 
    return (
        <div className="profile-page"> 
            <img className="profile-pic" src={profilePic}/>
            <div className="description">
                <div className="description-title"> Next Stop: Creativity ahead :)</div>
                <div> 
                    It is indeed scary and exciting to embark in new journeys and adventures (be it enrolling into a university or taking part in a hackathon),
                    but the creative spirit of the many diverse and talented people in Singapore will be the launchpad for great innovation and success. The ones who 
                    win were never the ones with the biggest skillset, but they were the ones who truly believed they could do it. In this beautiful world that we live in, 
                    what is the difference between a leader and a dictator? A vision, belief, and a willingness to serve
                    
                </div> 
            </div>
        </div>
    )
};

export default ProfilePage