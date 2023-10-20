import React from 'react';
import About from './About';
import TopNavigationBar from './TopNavigationBar';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import '../style/Home.css';

const Home = () => {

  return (
    <div id='home'>
      <TopNavigationBar />
      <main>
        <About/>
        <Education/>
        <Experience/>
      {/* <Contact></Contact> */}
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
