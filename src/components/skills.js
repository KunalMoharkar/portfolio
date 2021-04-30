import React from 'react';
import {Footer} from './footer';
import {Header} from './header';
import '../css/skills.css'

export const Skills=()=>{

        return(
            <div>
                    <div className="container">
                    <h2 className="headlinks">Skills</h2>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-info">
                                        <h4>Skilled</h4> 
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>C Programming</li>
                                            <li>C++ Programming</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-info">
                                        <h4>Intermediate</h4> 
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>Java Programming</li>
                                            <li>Javscript</li>
                                            <li>Java Servlets</li>
                                            <li>JSP</li>
                                            <li>React</li>
                                            <li>Django</li>
                                            <li>SQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-info">
                                        <h4>Beginner</h4> 
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>Python Programming</li>
                                            <li>PHP</li>
                                            <li>Express</li>
                                            <li>React-Native</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    
}