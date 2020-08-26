import React from 'react';
import '../css/footer.css';
import {Link} from 'react-router-dom';
import '../css/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer=()=>{

    return(

        <div className="footer">

                <div className="footerLinks">
                    <Link className="iconLink" to={`/`} >Home</Link>
                    <Link className="iconLink" to={`/Skills/`} >Skills</Link>
                    <Link className="iconLink" to={`/About/`} >About</Link>  
                    <Link className="iconLink" to={`/Projects/`} >Projects</Link>
                </div>

                <div className="footerContact">
                    <h4>Contact:</h4>
                    <p>kunalmoharkar1700@gmail.com</p>
                </div>   

                <div className="footerIcons">  
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

            </div>  
    )


}