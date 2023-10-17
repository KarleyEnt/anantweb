import React, { useState, useRef } from "react";
import dragMouseDown from '../helper/eventDrag';
import ExperienceModalFooter from "./ExperienceModalFooter";
import '../style/ExperienceModal.css';

const ExperienceModal = (props) => {
  const { title, socialLinks, socialImgs, img, handleExpImgDivClick, skills } = props;
  const dragRefModal = useRef(null);
  const [skillsPopUp, setSkillsPopUp] = useState(null);
  let skillList;
  
  if (skills.length) {
    skillList = (
      <div id='skillList' onClick={(e) => e.stopPropagation()}>
        <ul className='skills'>
          {
            skills.map((skill) => <li className='skill' key={skill}>{skill}</li>
          )}
        </ul>
      </div>
    );
  }

  return (
    <div className='expModal' ref={dragRefModal} onMouseDown={(e) => dragMouseDown(e, dragRefModal)}>
      {skillsPopUp ? skillList : null}
      <div className='exp-modal-header'>
        {title}
        <div className='exp-modal-header-exit' onMouseDown={(e) => handleExpImgDivClick(e)}>X</div>
      </div>
      <div className='expModalImgDiv'>
        <img className='exp-img' src={img} alt={title} />
      </div>
      <ExperienceModalFooter skills={skills} socialLinks={socialLinks} socialImgs={socialImgs} skillsPopUp={skillsPopUp} setSkillsPopUp={setSkillsPopUp} />
    </div>
  );
};

export default ExperienceModal;
