import React from 'react'
import './feature.css'
import Fe1 from '../images/plan-track.png'
import Fe2 from '../images/fe2.png'


export default function Feature(){
    return(
        <div className="Feature-container">

            <div className="feature-text">
                <h1>The best software teams ship early and often.</h1>
                <p>Jira Software is built for every member of your software team to plan,
                    track, and release great software.</p>
            </div>

            <div className="f1">
                <img src={Fe2} className="f1-image" alt="plan"></img>
                <div className="f1-des">
                    <h2>Paln</h2>
                    <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                    <h2>Track</h2>
                    <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                </div>
            </div>

            <div className="f2">
                <div className="f1-des">
                    <h2>Paln</h2>
                    <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                    <h2>Track</h2>
                    <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                </div>
                <img src={Fe1} className="f1-image" alt="image1"></img>
            </div>
            

        </div>
    );
}