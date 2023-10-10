import React, {useState, useRef} from "react";
import dragMouseDown from '../helper/eventDrag';
import ExperienceModal from "./ExperienceModal";
import '../style/ExperienceCard.css'

const ExperienceCard = (props) => {
  const {expDivheader, img, title, year, socialLinks, socialImgs} = props;
  const dragRefDiv = useRef(null);
  const [displayExpModal, setDisplayExpModal] = useState(false);
  const [displayExpOverlay, setDisplayExpOverlay] = useState(false);
  
  const expOverlay = (
    <div className='expOverlay'>
    </div>
  );
  const handleExpImgDivClick = (e) => {
    e.stopPropagation();
    setDisplayExpModal(!displayExpModal);
  };

  return (
    <>
      {displayExpModal ? <ExperienceModal title={title} socialLinks={socialLinks} socialImgs={socialImgs} img={img} handleExpImgDivClick={handleExpImgDivClick}/> : null }
      <div className='expDiv' ref={dragRefDiv} onMouseDown={(e) => dragMouseDown(e, dragRefDiv)}>
        <div className='expDivheader'>{expDivheader}</div>
        <div
          className='expImgDiv'
          onMouseDown={(e) => { handleExpImgDivClick(e) }}
          onMouseEnter={() => setDisplayExpOverlay(true)}
          onMouseLeave={() => setDisplayExpOverlay(false)}
        >
          {displayExpOverlay ? expOverlay : null}
          <img className='expImg' src={img} alt={title} />
        </div>
        <div className='expFooter'>
          <h4>{title}</h4>
          <p>{year}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
