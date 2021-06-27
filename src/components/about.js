import React, {useState} from 'react';
import {Footer} from './footer';
import {Header} from './header';
import '../css/about.css'
import Resume from '../images/KunalMoharkar-resume.pdf';

export const About=()=>{

    const [moreAbout, setmoreAbout] = useState(false)
    const [connect, setConnect] = useState(false)
    
    const moreAboutcontent = 
                <div>
                <p className="aboutText">
                    My journey with programming started in my freshmen year and from "hello world" 
                    to modern web frameworks there was no looking back. 
                    "The day you stop learning is the day you start deteriorating", this saying drives me.
                    I love experimenting with new techs, brainstorming new ideas, and bringing them to life through my coding skills.
                    I have been fond of sports since middle school and enjoy playing badminton.
                    With my College and side projects,
                    I find a little free time which I spend listening to music or gaming.
                  </p>
                  {!connect?
                       <div className="buttonContainer">
                       <a href={Resume}><button className="btn btn-primary resumeButton">View Resume</button></a>
                       <button className="btn btn-primary resumeButton" onClick={() => setConnect(true)}>Connect with me</button>
                    </div>
                        :null
                    }
                 
                </div>

    const connectContent = 
                    <div>
                    <p className="aboutText" style={{'textAlign':'center'}}>
                        I am actively looking for opportunities in Fullstack and related fields.
                        You can contact me on <a href="https://linkedin.com/in/kunal-moharkar-31ba49168">linkedin</a> or simply drop a mail at 
                        <a href="mailto:kunalmoharkar1700@gmail.com"> kunalmoharkar1700@gmail.com</a>
                    </p>
                    <div className="buttonContainer">
                       <a href={Resume}><button className="btn btn-primary resumeButton">View Resume</button></a>
                    </div>
                    </div>

    return(
        <div>   
           
            <div className="container">
                <h2 className="headlinks">About</h2>
                 <div className="aboutTextContainer" >
                    <p className="aboutText">
                    Hi, I am <b>Kunal</b>. I am pursuing my Bachelors in Computer Science.
                    The world of Web applications and DevOps fascinates me. 
                    I am working as a web developer at <a href="https://studentportal.vnit.ac.in">Student Portal</a> VNIT. 
                    I was also part of the web Team for AXIS, the Technical fest of VNIT.
                    </p>
                    {!moreAbout?
                        <div className="buttonContainer">
                            <a href={Resume}><button className="btn btn-primary resumeButton">View Resume</button></a>
                            <button className="btn btn-primary resumeButton" onClick={() => setmoreAbout(true)}>More about me</button>
                        </div>
                        :null
                    }
            
                    {moreAbout?moreAboutcontent:null}

                    {connect?connectContent:null}                   
                    </div>
                    
                </div>
        </div>
    )
}