import React, { useState } from "react";
import { RIGHT_ARROW, LEFT_ARROW } from "../Constants";
import '../style/Education.css'

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > 2) {
      newIndex = 2;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div id='education'>
      <div id='educationBody'>
        <h3 className='section-header'>Education</h3>
        <div className='timeline-with-nav'>
          <button id='timelineLeftBtn' className='timeline-btn left-btn' onClick={() => updateIndex(activeIndex - 1)}>
            {LEFT_ARROW}
          </button>
          <div className='timeline'>
            <div className='timeline-container' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
              <div className='timeline-line' />
              <span className='container container1'>
                <div className="container-list">
                  <h4 className="eduHeading4">Computer and Communication Eng.</h4>
                  <h5 className="eduHeading5">
                    Manipal Institute of Technology, Manipal
                  </h5>
                  <p>
                    CGPA: 8.21
                  </p>
                </div>
              </span>
              <span className='container container2'>
                <div className="container-list">
                  <h4 className="eduHeading4">12th Standard</h4>
                  <h5 className="eduHeading5">
                    Ahmedabad Public School, Ahmedabad
                  </h5>
                  <p>
                    79.9%
                  </p>
                </div>
              </span>
              <span className='container container3'>
                <div className="container-list">
                  <h4 className="eduHeading4">10th Standard</h4>
                  <h5 className="eduHeading5">
                    Kennedy High The Global School, Hyderabad
                  </h5>
                  <p>
                    GPA: 10
                  </p>
                </div>
              </span>
            </div>
          </div>
          <button id='timelineRightBtn' className='timeline-btn right-btn' onClick={() => updateIndex(activeIndex + 1)}>
            {RIGHT_ARROW}
          </button>
        </div>
      </div>
    </div>
  )
};

export default Education;