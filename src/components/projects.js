import React from 'react';
import '../css/projects.css';
import {Footer} from './footer';

export const Projects=()=>{

    return(
        
        <div>
            <div className="container">
                <div className="header">
                    <h3>Projects</h3>
                </div>    

                <div className="projectContainer">
                    <ul>
                        <li>
                            <div className="projectHeader">
                                <h6>Project Name</h6>
                            </div>
                            <div className="projectDescription">
                                <p>project description</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <Footer />
        </div>

    )
}