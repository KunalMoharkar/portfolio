import React from 'react';
import {Footer} from './footer';
import {Header} from './header';
import '../css/about.css'

export const About=()=>{

    return(
        <div>
            <Header text="About"/>
                <div className="container">
                 <div className="aboutTextContainer" >
                    <p className="aboutText">
                    Hello, I am <b>Kunal Moharkar</b> Pre Final year Computer Science And Engineering student at <b>VNIT, Nagpur. </b>
                    As it is rightly said that <span><i>"The day you stop learning is the day you start deteriorating." </i></span>
                    I am in a constant hunt for aquiring new skills.
                    I love thinking about problems, new ideas and bring them to life thorough my code. 
                    The world of web development Fasinates so I keep on experimenting with new techs and frameworks. 
                  </p>
                    </div>
                    <div className="buttonContainer">
                        <button className="btn btn-primary resumeButton">View Resume</button>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}