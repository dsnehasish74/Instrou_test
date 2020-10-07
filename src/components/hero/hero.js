import React from 'react'
import './hero.css'
import HeroImage from '../images/hero.png'


export default function Hero(){
    return(
        <div className="Hero-container">

            <div className="hero-text">
                <h1>The #1 software development tool used by agile teams</h1>
                <button className="hero-button">Get it free</button>
            </div>
            <div>
                <img className="hero-image" src={HeroImage} alt="hero"></img>
            </div>

        </div>
    );
}