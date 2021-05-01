import React from 'react';
import {Footer} from './footer';
import {Header} from './header';
import '../css/skills.css'

export const Skills=()=>{

        return(
            <div>
                    <div className="container">
                    <h2 className="headlinks">Skills</h2>

                    <div className="skills-container">
                        <div>
                            <div className="skills-header">
                                <p>Skilled</p>
                            </div>
                            <div className="projectFooter">
                                <span>Django</span>
                                <span>Django Rest</span>
                                <span>CSS</span>
                                <span>Responsive Design</span>
                            </div>
                        </div>

                        <div>
                            <div className="skills-header">
                                <p>Intermediate</p>
                            </div>
                            <div className="projectFooter">
                                <span>React JS</span>
                                <span>React Native</span>
                                <span>Java Servlets</span>
                                <span>JSP</span>
                                <span>PHP</span>
                                <span>AWS</span>
                                <span>jQuery</span>
                                <span>Version Control</span>
                            </div>
                        </div>

                        <div>
                            <div className="skills-header">
                                <p>Beginner</p>
                            </div>
                            <div className="projectFooter">
                                <span>Saas</span>
                                <span>Docker</span>
                                <span>Node JS</span>
                                <span>Express JS</span>
                                <span>Adobe XD</span>
                                <span>Travis CI</span>
                            </div>
                        </div>
                    </div> 
                    

                    </div>
            </div>
        )
    
}