import React from "react";
import ExperienceCard from "./ExperienceCard";
import employmentHistory from '../util/photo/employmentHistory.png';
import googleDriveLogo from '../util/photo/googleDriveLogo.png';
import cernerIntern from '../util/photo/cernerIntern.png'
import '../style/Experience.css';

const Experience = () => {
  return (
    <div id='experience'>
      <div id='experienceBody'>
        <h3 className='section-header'>Experience and Internship</h3>
        <div id='experienceCardGrid'>
          <div id='experienceCardHolder1'>
            <ExperienceCard expDivheader='Oracle Cerner Health Care Pvt Ltd' img={employmentHistory} title='Software Developer' year='2021-2023' socialLinks={['https://drive.google.com/file/d/14pQBRsVFRuFbWV7Fzttl4qQWFZNlgnV6/view']} socialImgs={[googleDriveLogo]} skills={['ReactJs', 'JavaScript', 'HTML', 'CSS']} />
          </div>
          <div id='experienceCardHolder2'>
            <ExperienceCard expDivheader='Oracle Cerner Health Care Pvt Ltd' img={cernerIntern} title='Software Developer Intern' year='2021-2021' socialLinks={['https://drive.google.com/file/d/14pQBRsVFRuFbWV7Fzttl4qQWFZNlgnV6/view']} socialImgs={[googleDriveLogo]} skills={['MongoDb', 'Express', 'ReactJs', 'NodeJs', 'JavaScript', 'HTML', 'CSS']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
