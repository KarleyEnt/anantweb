import React from "react";
import '../style/About.css';
import suitPhotoCropped from '../util/photo/suitPhotoCropped.png'

const About = () => {
  return (
    <div id='about'>
      <header id='aboutHeader'>
        <h1 id='heading1'>Here to bring your imagination to the internet</h1>
        {/* <section className='intro'> */}
          <p id='introName'>Hello! I am Anant Wadhwani.</p>
          <p id='introText'>I bring with me a complete solution to making your website available on the internet.
            From developing search engine, time, space and performance optimized websites
            to identifying and choosing the best means to host them so that
            you can engage your audience and your audience can have a pleasant time surfing.</p>
        {/* </section> */}
        <div id='devCard'>
          <div id='devCardRotate'>
            <div id='devCardFront'>
              <img id='devPhoto' src={suitPhotoCropped}  alt='Developer' loading='lazy'/>
              <h2 id='aboutPhotoTitle'>Web Developer</h2>
            </div>
            <div id='devCardBack'>
              <h2>Anant Wadhwani</h2>
              {/* <h3>Web Developer</h3> */}
              {/* <p>Profecient in:</p> */}
              <div id='devCardBackList'>
                <p>MongoDb</p>
                <p>Express</p>
                <p>ReactJs</p>
                <p>NodeJs</p>
                <p>Blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};

export default About;
