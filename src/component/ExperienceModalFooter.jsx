import React from "react";
import '../style/ExperienceModalFooter.css';

const ExperienceModalFooter = (props) => {
  const { skills, socialLinks, socialImgs, skillsPopUp, setSkillsPopUp } = props;

  let skillBtn = null;
  if (skills.length) {
    skillBtn = <button className='experience-modal-skill-btn' onClick={() => {setSkillsPopUp(!skillsPopUp);}}>{skillsPopUp ? 'X': 'Skills'}</button>
  };

  return (
    <div id='expModalfooter'>
      <div className="experience-modal-skill-overlay">
        <ul className='social-list'>
          {socialLinks.map((socialLink, index) => {
            return <li className='social-list-item' key={`socialLink${index}`}>
              <a className='social-list-item-link'
                href={socialLink}
                target='_blank'
                rel='external
                noreferrer'>
                <img className="exp-modal-social-img" src={socialImgs[index]} alt={`social ${index+1}`} loading='lazy' />
              </a>
            </li>
          })}
        </ul>
        <div className="expModalFooterSkill">
          {skillBtn}
        </div>
      </div>
    </div>
  )
};

export default ExperienceModalFooter;
