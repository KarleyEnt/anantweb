import React, { useState } from "react";
import githubLogo from '../util/photo/githubLogo.png';
import linkedIn from '../util/photo/linkedInLogo.png';
import '../style/Footer.css';

const Footer = () => {
  const [skillsPopUp, setSkillsPopUp] = useState(null);

  return(
    <div id='footer'>
      <ul className='social-list'>
        <li className='social-list-item'>
          <a className='social-list-item-link' href='https://www.linkedin.com/in/anantwadhwani/' target='_blank' rel='external noreferrer'><img src={linkedIn} alt='LinkedIn' loading='lazy'/></a>
        </li>
        <li className='social-list-item'>
          <a className='social-list-item-link' href='https://github.com/KarleyEnt' target='_blank' rel='external noreferrer'><img src={githubLogo} alt='GitHub' loading='lazy'/></a>
        </li>
      </ul>
        <button id='skillsBtn' className={`skills-btn ${skillsPopUp ? 'skills-btn-fixed' : ''}`} onClick={() => setSkillsPopUp(!skillsPopUp)}>Created Using</button>
        {skillsPopUp ?  <div className="footerPopUpOverlay" onClick={() => setSkillsPopUp(false)}>
          <div id='footerPopUp' onClick={(e) => e.stopPropagation()}>
            <ul className="skill-list">
              <li className="skill-list-item">ReactJS</li>
              <li className="skill-list-item">NodeJS</li>
              <li className="skill-list-item">Express</li>
              <li className="skill-list-item">MongoDB</li>
              <li className="skill-list-item">Hostinger</li>
              {/* <li className="skill-list-item">Blockchain</li> */}
            </ul>
          </div>
        </div> : null}
    </div>
  )
};

export default Footer;
