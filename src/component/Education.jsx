import React, { useRef, useState } from "react";
import { RIGHT_ARROW, LEFT_ARROW } from "../Constants";
import '../style/Education.css'

const Education = () => {
  const refCount = useRef(1);
  const refContainer1 = useRef(null);
  const refContainer2 = useRef(null);
  const refContainer3 = useRef(null);
  const [detherLeft, setDetherLeft] = useState(true);
  const [detherRight, setDetherRight] = useState(false);

  const switchCase = (referenceCount) => {
    switch (referenceCount) {
      case 1: {
        refContainer1.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "center" });
        break;
      }
      case 2: {
        refContainer2.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "center" });
        break;
      }
      case 3: {
        refContainer3.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "center" });
        break;
      }
      default: break;
    }
  }

  const detherMove = (scrollDistance) => {
    setDetherRight(true);
    setDetherLeft(true);
    switchCase(refCount.current);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('');
      }, 1000);
    }).then(() => {
      window.scrollBy(0, scrollDistance);
      if (refCount.current === 3) {
        setDetherRight(true);
      } else {
        setDetherRight(false);
      };
      if (refCount.current === 1) {
        setDetherLeft(true);
      } else {
        setDetherLeft(false);
      };
    });
  };

const moveTimeline = (event) => {
  if (refCount.current <= 3 && refCount.current > 1) {
    if (event.target.id === 'timelineLeftBtn') {
      refCount.current = refCount.current - 1;
      detherMove(-1);
    }
  }
  if (refCount.current >= 1 && refCount.current < 3) {
    if (event.target.id === 'timelineRightBtn') {
      refCount.current = refCount.current + 1;
      detherMove(1);
    }
  }
}

return (
  <div id='education'>
  <div id='educationBody'>
    <h3 className='section-header'>Education</h3>
    <div className='timeline-with-nav'>
      {detherLeft ? <button id='timelineLeftBtn' className='timeline-btn left-btn'>
        X
      </button> : <button id='timelineLeftBtn' className='timeline-btn left-btn' onClick={(e) => moveTimeline(e)}>
        {LEFT_ARROW}
      </button>}
      <div className='timeline'>
        <div className='timeline-container'>
          <div className='timeline-line' />
          <span ref={refContainer1} className='container container1'>
            <ul className="container-list">
              <li>
                <h4 className="eduHeading4">Computer and Communication Eng.</h4>
                <h5 className="eduHeading5">
                  Manipal Institute of Technology, Manipal
                </h5>
                <p>
                  CGPA: 8.21
                </p>
              </li>
            </ul>
          </span>
          <span ref={refContainer2} className='container container2'>
            <ul className="container-list">
              <li>
                <h4 className="eduHeading4">12th Standard</h4>
                <h5 className="eduHeading5">
                  Ahmedabad Public School, Ahmedabad
                </h5>
                <p>
                  79.9%
                </p>
              </li>
            </ul>
          </span>
          <span ref={refContainer3} className='container container3'>
            <ul className="container-list">
              <li>
                <h4 className="eduHeading4">10th Standard</h4>
                <h5 className="eduHeading5">
                  Kennedy High The Global School, Hyderabad
                </h5>
                <p>
                  GPA: 10
                </p>
              </li>
            </ul>
          </span>
        </div>
      </div>
      {detherRight ? <button id='timelineRightBtn' className='timeline-btn right-btn'>
        X
      </button> : <button id='timelineRightBtn' className='timeline-btn right-btn' onClick={(e) => moveTimeline(e)}>
        {RIGHT_ARROW}
      </button>}
    </div>
  </div>
  </div>
)
};

export default Education;