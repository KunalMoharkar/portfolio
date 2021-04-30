import React from 'react';
import '../css/projects.css';
import {Footer} from './footer';
import {Header} from './header';
import {ProjectList} from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const Projects=()=>{

    return(
        
        <div>
            <div className="container">
            <h2 className="headlinks">Projects</h2>
                <div className="projectContainer">
                    <ul>
                        {

                        ProjectList.map((project)=>{

                            return(
                                    <li>
                                        <div className="projectHeader">
                                            <a href={project.links[0]} className="iconLink">{project.name}</a>
                                        </div>
                                        <div className="projectDescription">
                                            <p>{project.description}</p>
                                        </div>
                                            <div className="projectFooter">     
                                        </div>
                                    </li>
                                )

                             })
                        
                    }
                     
                    </ul>
                </div>

            </div>
        </div>

    )
}