import React, { useState } from "react";
import '../style/ExperienceModalFooter.css';

const ExperienceModalFooter = (props) => {
  const { skills, socialLinks, socialImgs, displayExpModalSkillOverlay, setDisplayExpModalSkillOverlay } = props;
  const [skillsPopUp, setSkillsPopUp] = useState(null);

  let skillBtn = null;
  let skillList = null;
  if (skills.length) {
    skillBtn = <button className='experience-modal-skill-btn' onClick={() => {setSkillsPopUp(!skillsPopUp); setDisplayExpModalSkillOverlay(!displayExpModalSkillOverlay);}}>Skills</button>
    skillList = (
      
        <div id='' onClick={(e) => e.stopPropagation()}>
          <ul className="">
            {skills.map((skill) =>
              <li className="">{skill}</li>
            )}
          </ul>
        </div> 
    );
  };

  return (
    <div id='expModalfooter'>
      <div className="experience-modal-skill-overlay">
        <ul className='social-list'>
          {socialLinks.map((socialLink, index) => {
            return <li className='social-list-item'>
              <a className='social-list-item-link'
                href={socialLink}
                target='_blank'
                rel='external
                noreferrer'>
                <img className="exp-modal-social-img" src={socialImgs[index]} alt={`socialImg${index}`} loading='lazy' />
              </a>
            </li>
          })}
        </ul>
        <div className="expModalFooterSkill">
          {skillBtn}
          {skillsPopUp ? skillList : null}
        </div>
      </div>
    </div>
  )
};

export default ExperienceModalFooter;
