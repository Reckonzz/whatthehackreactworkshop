import React from "react";

import Banner from "../../components/banner/banner"
import ProfilePage from "../../components/profile/profile"
import CardGroup from "../../components/cardGroup/cardGroup"

import "./landingPage.styles.css"

const LandingPage = () => { 
    return (
        <div className="landing-page"> 
            <Banner/> 
            <ProfilePage/>
            <CardGroup/>
        </div>
    )
};

export default LandingPage

