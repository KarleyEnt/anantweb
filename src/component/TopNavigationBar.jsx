import React, {useState} from "react";
import useWindowDimensions from '../hooks/useWindowDimensions';
import '../style/TopNavigationBar.css';

const TopNavigationBar = () => {
  const [isTopNavigationBarOpen, setIsTopNavigationBarOpen] = useState(false);
  const windowWidth = useWindowDimensions();
  let buttonClass;
  let topNavigationBarClass;
  let content;

  if (isTopNavigationBarOpen) {
    buttonClass = 'topNavigationBarButton buttonOpen';
    topNavigationBarClass = 'topNavigationBar topNavigationBarOpen'
  } else {
    buttonClass = 'topNavigationBarButton';
    topNavigationBarClass = 'topNavigationBar topNavigationBarClosed';
  }
 
  if (windowWidth >= 500) {
    content = (
      <div className='top-nav' onMouseEnter={() => setIsTopNavigationBarOpen(true)} onMouseLeave={() => setIsTopNavigationBarOpen(false)} >
        <div className={topNavigationBarClass}>
          <a className='top-nav-items' href='#about' onClick={() => setIsTopNavigationBarOpen(false)}>About</a>
          <a className='top-nav-items' href='#education' onClick={() => setIsTopNavigationBarOpen(false)}>Education</a>
          <a className='top-nav-items' href='#experience' onClick={() => setIsTopNavigationBarOpen(false)}>Experience</a>
          <a className='top-nav-items' href='#contact' onClick={() => setIsTopNavigationBarOpen(false)}>Contact</a>
          <a className='top-nav-items' href='#footer' onClick={() => setIsTopNavigationBarOpen(false)}>Social</a>
        </div>
        <button className={buttonClass} onMouseDown={() => setIsTopNavigationBarOpen(!isTopNavigationBarOpen)}>&#9776;</button>
      </div>
    );
  } else {
    content = (
      <div className='top-nav' onMouseEnter={() => setIsTopNavigationBarOpen(true)} onMouseLeave={() => setIsTopNavigationBarOpen(false)} >
        <button className={buttonClass} onMouseDown={() => setIsTopNavigationBarOpen(!isTopNavigationBarOpen)}>&#9776;</button>
        <div className={topNavigationBarClass}>
          <button className='mobile-nav-btn' onMouseDown={() => setIsTopNavigationBarOpen(!isTopNavigationBarOpen)}>&#9776;</button>
          <a className='top-nav-items' href='#about' onClick={() => setIsTopNavigationBarOpen(false)}>About</a>
          <a className='top-nav-items' href='#education' onClick={() => setIsTopNavigationBarOpen(false)}>Education</a>
          <a className='top-nav-items' href='#experience' onClick={() => setIsTopNavigationBarOpen(false)}>Experience</a>
          <a className='top-nav-items' href='#contact' onClick={() => setIsTopNavigationBarOpen(false)}>Contact</a>
          <a className='top-nav-items' href='#footer' onClick={() => setIsTopNavigationBarOpen(false)}>Social</a>
        </div>
      </div>
    );
  }

  return (
    content 
  )
};

export default TopNavigationBar;
