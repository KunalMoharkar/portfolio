import React from 'react';
import Avatar from '../images/imgAvatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import '../css/home.css';

export const Home=()=>{

    return(
        <div className="homeContainer">
            
            

            <div className="imgContainer">
                <img className="round-img" src={Avatar}></img>
            </div>

            <div className="desContainer">
                <p><span className="name">Kunal Moharkar</span><br/><span className="tag">Student | Learner | Web Developer</span></p>

        
                <a className="iconLink" href='https://github.com/KunalMoharkar'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'github']} style={{'font-size':'30px'}} />
                </a>
                <a className="iconLink" href='https://linkedin.com/in/kunal-moharkar-31ba49168'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'linkedin']} style={{'font-size':'30px'}} />
                </a>
                <a className="iconLink" href='href="mailto:kunalmoharkar1700@gmail.com"'>
                    <FontAwesomeIcon  className="icons" icon={['fab', 'google']} style={{'font-size':'28px'}} />
                </a>
            

            </div>

            <div className="navContainer">
                <Link to={`/About/`} className="links">About</Link>
                <Link to={`/Projects/`} className="links">Projects</Link>
                <Link to={`/Skills/`} className="links">Skills</Link>
                
            </div>

        </div>
    )
}
