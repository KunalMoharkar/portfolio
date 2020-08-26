import React from 'react';
import Avatar from '../images/imgAvatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import '../css/home.css';

export const Home=()=>{

    return(
        <div className="homeContainer">

            <div className="linkContainer">
                <Link to={`/`}  className="links">Home</Link>
            </div>

            <div className="imgContainer">
                <img className="round-img" src={Avatar}></img>
            </div>

            <div className="desContainer">
                <p><span className="name">Kunal Moharkar</span><br/><span className="tag">Enthusiastic Learner|Fullstack Developer</span></p>

                <a className="iconLink" href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'github-square']} size="2x" />
                </a>
                <a className="iconLink" href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'linkedin']} size="2x"/>
                </a>
                <a className="iconLink" href='https://github.com/KunalMoharkar'>
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
