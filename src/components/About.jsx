import React from 'react';
// import connected from "../images/connected.svg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common 
                name="Welcome to About Page" 
                imgsrc="images/connected.svg"
                visit="/contact"
                btname="Contact Now"  
            />
        </>
    )
}

export default About;
