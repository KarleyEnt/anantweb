import React, {useState, useRef} from "react";
import dragMouseDown from '../helper/eventDrag';
import ExperienceModalFooter from "./ExperienceModalFooter";
import '../style/ExperienceModal.css';

const ExperienceModal = (props) => {
  const { title, socialLinks, socialImgs, img, handleExpImgDivClick} = props;
  const dragRefModal = useRef(null);
  const [displayExpModalSkillOverlay, setDisplayExpModalSkillOverlay] = useState(false);
  return (
    <div className='expModal' ref={dragRefModal} onMouseDown={(e) => dragMouseDown(e, dragRefModal)}>
      <div className={displayExpModalSkillOverlay ? 'exp-modal-skill-overlay' : null}></div>
      <div className='exp-modal-header'>
        {title}
        <div className='exp-modal-header-exit' onMouseDown={(e) => handleExpImgDivClick(e)}>X</div>
      </div>
      <div className='expModalImgDiv'>
        <img className='expImg' src={img} alt={title} width='100%' height='100%' />
      </div>
      <ExperienceModalFooter skills={['']} socialLinks={socialLinks} socialImgs={socialImgs} displayExpModalSkillOverlay={displayExpModalSkillOverlay} setDisplayExpModalSkillOverlay={setDisplayExpModalSkillOverlay} />
    </div>
  );
};

export default ExperienceModal;