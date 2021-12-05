import React from 'react'
import Hero from '../Hero/Hero'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Hero />
            <div>
                <h3>Welcome to Chun Tech Innovations - Custom Plastic Extrusion Specialists</h3>
                <div>We pride ourselves on our commitment to quality and ensuring the process and end result are second to none.</div>
                <div>Read about us on our <Link to="/about">About</Link> page!</div>
            </div>
            <h2>
                Swagapino
            </h2>

        </div>
    )
}

export default Home;