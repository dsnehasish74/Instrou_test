import React from 'react'
import './workflow.css'
import WorkflowI from '../images/workflow_timeline_mobile.svg'
import play from '../images/google-play-badge.svg'
import Pic from '../images/pic.png'



export default function Workflow() {
    return (
        <div>

            <div className="workflow-container">

                <div className="wr_1">
                    <div className="wr_1_text">
                        <h2>Choose a workflow, or make your own</h2>
                        <h4>Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.</h4>
                    </div>
                    <img className="workflow_pic" src={WorkflowI} alt="workflow"></img>
                </div>


            </div>
            <div className="automation">
                <h2>Streamline your work with automation</h2>
                <h5>Save time, stay focused and work smarter with Jira automation. </h5>
                <button>Learn more about automation</button>
            </div>
            <div className="App_dowload">
                <div className="app_container">
                    <i class="fas fa-bookmark"></i>
                    <h2>Move work forward from anywhere</h2>
                    <h5>Track and manage projects in real time from the convenience of your favorite device with Jira mobile.</h5>
                    <img src={play} className="play" alt="play"></img>
                </div>

                <div className="app_container" id="test-2">
                    <img src={Pic} alt="test"></img>
                    <h2>"Jira Software is instrumental in building and maintaining the best software on the market."</h2>
                    <h5>DANIELE FARNEDI, TRULIA CTO</h5>
                    <a href="#" className="story_link">View his story</a>
                </div>
            </div>
        </div>
    );
}