import React , {useState} from 'react';
import '../css/projects.css';
import {Footer} from './footer';
import {Header} from './header';
import {ProjectList, ProjectList1} from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const Projects=()=>{

    const [more, setMore] = useState(false)

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
                                            <a href={project.links[0]}>{project.name} 
                                            <i class="fa fa-external-link" style={{'marginLeft':'2px'}} aria-hidden="true"></i>
                                            </a>
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

                <div className="projectDescription" style={{'text-align':'center'}}>
                    
                    <p>Along with the above major projects. I have also worked on some mini projects as part of hackathons, freelancing, and most of them just for fun <i class="fa fa-smile-o" aria-hidden="true"></i></p>
                    <i class='far fa-grin'></i>
                    {!more?
                    <button className="btn btn-primary resumeButton"  onClick={() => setMore(true)}>More of my work</button>
                    :null}
                    </div>
                     
                    
                </div>

             
                {more?
                <div className="projectContainer">
                    
                    {

                        ProjectList1.map((project)=>{

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
                :null}

            </div>
        </div>

    )
}