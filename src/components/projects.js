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
                    
                        {

                        ProjectList.map((project)=>{

                            return(
                                    <div>
                                        <div className="projectHeader">
                                            <a href={project.links[0]}>{project.name}</a>
                                        </div>
                                        <div className="projectDescription">
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="projectFooter">     
                                          
                                                {
                                                    project.tags.map((tag)=>{
                                                        return(
                                                            <span>
                                                                {tag}
                                                            </span>
                                                        )
                                                    })
                                                }
                                        </div>
                                    </div> 
                                )

                             })
                        
                    }
                     
                    
                </div>

            </div>
        </div>

    )
}