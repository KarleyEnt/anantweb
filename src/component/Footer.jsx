import React, { useState } from "react";
import githubLogo from '../util/photo/githubLogo.png';
import lIL from '../util/photo/lIL.png';
import '../style/Footer.css';

const Footer = () => {
  const [skillsPopUp, setSkillsPopUp] = useState(null);

  return(
    <div id='footer'>
      <div className='s-list'>
        <li className='social-list-item'>
          <a className='social-list-item-link' href='https://www.linkedin.com/in/anantwadhwani/' target='_blank' rel='external noreferrer'><img src={lIL} alt='linkedIn' loading='lazy'/></a>
        </li>
        <li className='social-list-item'>
          <a className='social-list-item-link' href='https://github.com/KarleyEnt' target='_blank' rel='external noreferrer'><img src={githubLogo} alt='GitHub' loading='lazy'/></a>
        </li>
      </div>
      <div>
      <button id='skillsBtn' className={`skills-btn ${skillsPopUp ? 'skills-btn-fixed' : ''}`} onClick={() => setSkillsPopUp(!skillsPopUp)}>Created Using</button>
      </div>
        {skillsPopUp ?  <div className="footerPopUpOverlay" onClick={() => setSkillsPopUp(false)}>
          <div id='footerPopUp' onClick={(e) => e.stopPropagation()}>
            <ul className="skill-list">
              <li className="skill-list-item">ReactJS</li>
              <li className="skill-list-item">NodeJS</li>
              <li className="skill-list-item">Express</li>
              <li className="skill-list-item">MongoDB</li>
              <li className="skill-list-item">Hostinger</li>
            </ul>
          </div>
        </div> : null}
    </div>
  )
};

export default Footer;
