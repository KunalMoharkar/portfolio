import React from 'react';
import Avatar from '../images/imgAvatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import '../css/home.css';

export const Home=()=>{

    return(
        <div className="container">
            <div className="linkContainer">
                <Link to={`/`}  className="links">Home</Link>
            </div>
            <div className="imgContainer">
                <img className="round-img" src={Avatar}></img>
            </div>
            <div className="desContainer">
                <p>Kunal Moharkar <br/><span>Enthusiastic Learner|Fullstack Developer</span></p>
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'github-square']} size="2x" />
                </a>
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'linkedin']} size="2x"/>
                </a>
                <a href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'instagram-square']} size="2x"/>
                </a>
            </div>
            <div className="navContainer">
                <Link to={`/About/`} className="links">About</Link>
                <Link to={`/Skills/`} className="links">Skills</Link>
                <Link to={`/Projects/`} className="links">Projects</Link>
            </div>
        </div>
    )
}
