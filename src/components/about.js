import React from 'react';
import {Footer} from './footer';
import {Header} from './header';
import '../css/about.css'

export const About=()=>{

    return(
        <div>   
           
            <div className="container">
                <h2 className="headlinks">About</h2>
                 <div className="aboutTextContainer" >
                    <p className="aboutText">
                    Hi, I am Kunal. I am pursuing my Bachelors in Computer Science.
                    The world of Web applications and DevOps fascinates me. My journey with programming started in my freshmen year. From "hello world" to modern web frameworks there was no looking back. " The day you stop learning is the day you start deteriorating", this saying drives me.
                    I love experimenting with new techs, brainstorming new ideas, and bringing them to life through my coding skills. With my College and side projects, I find a little free time which I spend listening to music, gaming

                  </p>
                    </div>
                    <div className="buttonContainer">
                        <button className="btn btn-primary resumeButton">View Resume</button>
                    </div>
                </div>
        </div>
    )
}